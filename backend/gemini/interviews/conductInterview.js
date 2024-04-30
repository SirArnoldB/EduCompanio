import { googleGenerativeAI } from "../client.js";
import { getSystemInstructionsByInterviewType } from "./system-instructions.js";
import { app } from "../../firebase/admin.js";

// Firestore instance
const db = app.firestore();

async function conductInterview(interviewId, msg, progress) {
    try {
        const interviewDoc = await db.collection("mockAIInterviews").doc(interviewId).get();
        const interviewData = interviewDoc.data();
        const interviewType = interviewData.interviewType;
        const question = interviewData.question;
        const chatConversation = interviewData.chatHistory.conversation;

        const model = googleGenerativeAI.getGenerativeModel({
            model: process.env.GEMINI_PRO_LATEST,
            systemInstruction: getSystemInstructionsByInterviewType(interviewType.toLowerCase(), question, progress),
            safetySettings: [],
        });

        // Create a new chat instance for each interview
        const chat = model.startChat({
            history: chatConversation,
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        // Process user message and generate response
        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const responseText = await response.text();

        // Update chatHistory in the database with the user message and AI response
        chatConversation.push({ role: "user", parts: [{ text: msg }] });
        chatConversation.push({ role: "model", parts: [{ text: responseText }] });

        await db.collection("mockAIInterviews").doc(interviewId).update({
            chatHistory: { conversation: chatConversation },
            updatedAt: new Date().toISOString(),
        });

        return responseText;
    } catch (error) {
        console.error("Error conducting interview:", error);
        throw new Error("Failed to conduct interview");
    }
}

export { conductInterview };