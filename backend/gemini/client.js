import { GoogleGenerativeAI } from "@google/generative-ai";

const googleGenerativeAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)

export { googleGenerativeAI }