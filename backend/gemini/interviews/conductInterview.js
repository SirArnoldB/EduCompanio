import { googleGenerativeAI } from "../client.js";
import { getSystemInstructionsByInterviewType } from "./system-instructions.js";

// Firestore instance
const db = app.firestore();

async function conductInterview(interviewId, question, msg, progress, history) {
    try {
        const interviewDoc = await db.collection("interviews").doc(interviewId).get();
        const interviewData = interviewDoc.data();
        const interviewType = interviewData.type;

        const model = googleGenerativeAI.getGenerativeModel({
            model: process.env.GEMINI_PRO_LATEST,
            systemInstructions: getSystemInstructionsByInterviewType(interviewType, question, progress),
            safetySettings: [],
        });

        // Create a new chat instance for each interview
        const chat = model.startChat({
            history: history,
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        // Process user message and generate response
        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = await response.text();

        // Append user message and generated response to chat history
        chat.history.push({ user: msg, assistant: text });

        // Return the generated response and updated chat history
        return { response: text, history: chat.history };
    } catch (error) {
        console.error("Error conducting interview:", error);
        throw new Error("Failed to conduct interview");
    }
}

export { conductInterview };