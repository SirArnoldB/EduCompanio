import { generateInterviewQuestion } from "../gemini/interview-questions/generateInterviewQuestion.js";
import { app } from "../firebase/admin.js";
import { conductInterview } from "../gemini/interviews/conductInterview.js";

// Firestore instance
const db = app.firestore();

const createMockAIInterview = async (req, res) => {
    try {
        const { interviewType, company, level } = req.body;

        const question = await generateInterviewQuestion(interviewType.toLowerCase(), company, level);
        const chatHistory = {
            conversation: [
                {
                    role: "user",
                    parts: [
                        { text: `Start interview chat with ${req.user.name}` },
                    ],
                },
                {
                    role: "model",
                    parts: [
                        { text: `Hello, ${req.user.name}! I'm here to help you prepare for your upcoming interview. Let's get started!` },
                    ],
                },
            ]
        };

        const newMockAIInterviewRef = await db.collection("mockAIInterviews").add({
            interviewType,
            company,
            level,
            question,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            chatHistory: chatHistory,
        });

        const mockAIInterviewSnapshot = await newMockAIInterviewRef.get();

        res.status(201).json({
            id: newMockAIInterviewRef.id, ...mockAIInterviewSnapshot.data()
        });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

// Conduct a mock AI interview
const conductMockInterview = async (req, res) => {
    try {
        const { interviewId, msg, progress } = req.body;

        const responseText = await conductInterview(interviewId, msg, progress);

        res.status(200).json({ responseText });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

// Get all mock AI interviews
const getAllMockAIInterviews = async (req, res) => {
    try {
        const mockAIInterviewsSnapshot = await db.collection("mockAIInterviews").get();
        const mockAIInterviews = mockAIInterviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(mockAIInterviews);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

// Get a specific mock AI interview
const getMockAIInterview = async (req, res) => {
    try {
        const { id } = req.params;
        const mockAIInterview = await db.collection("mockAIInterviews").doc(id).get();
        if (!mockAIInterview.exists) {
            res.status(404).json({ error: "Mock AI Interview not found" });
        } else {
            res.status(200).json({ id: mockAIInterview.id, ...mockAIInterview.data() });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    createMockAIInterview,
    getAllMockAIInterviews,
    getMockAIInterview,
    conductMockInterview
};