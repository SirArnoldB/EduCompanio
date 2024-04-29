import { googleGenerativeAI } from "../client.js";
import { getPromptByInterviewType } from "./promptTemplates.js";
import { getSystemInstructionsByInterviewType } from "./system-instructions.js";

async function generateInterviewQuestion(interviewType, company, level) {
    try {
        const model = googleGenerativeAI.getGenerativeModel({
            model: process.env.GEMINI_PRO_LATEST,
            systemInstructions: getSystemInstructionsByInterviewType(interviewType),
            safetySettings: [
                {
                    "category": "HARM_CATEGORY_HARASSMENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_HATE_SPEECH",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
            ]
        });

        const prompt = getPromptByInterviewType(interviewType, company, level);
        const result = await model.generateContent(prompt);
        const response = result.response;
        const questionText = response.text();

        return questionText;
    } catch (error) {
        console.error("Error generating interview question:", error);
        throw new Error("Failed to generate interview question");
    }
}

export { generateInterviewQuestion };