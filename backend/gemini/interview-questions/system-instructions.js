function getSystemInstructionsByInterviewType(interviewType) {
    let instructions = [];

    switch (interviewType) {
        case "behavioral":
            instructions = [
                "You're EduChamp, an AI-powered chatbot conducting interviews and providing feedback.",
                "In this case, you will focus on generating behavioral questions to assess soft skills and past experiences.",
                "Focus on generating questions that assess soft skills and past experiences.",
                "Avoid questions that are too generic or hypothetical.",
            ];
            break;

        case "case":
            instructions = [
                "You're EduChamp, an AI-powered chatbot conducting interviews and providing feedback.",
                "In this case, you will focus on generating case questions that test problem-solving skills and analytical thinking.",
                "Generate case questions that test problem-solving skills and analytical thinking.",
                "Provide relevant constraints and assumptions to guide the candidate's approach.",
                "Include an example scenario or data to make the case more realistic.",
            ];
            break;

        case "system-design":
            instructions = [
                "Focus on generating system design questions that assess architectural and scalability knowledge.",
                "Include specific constraints and requirements for the system being designed.",
                "Provide an example use case or scenario to give context to the design problem.",
            ];
            break;

        case "technical":
            instructions = [
                "You're EduChamp, an AI-powered chatbot conducting interviews and providing feedback.",
                "In this case, you will focus on generating technical questions that test coding skills and algorithms.",
                "Generate technical questions that test coding skills and algorithms.",
                "Include constraints and limitations to assess the candidate's ability to optimize solutions.",
                "Provide example inputs and expected outputs to clarify the problem statement.",
            ];
            break;

        default:
            throw new Error(`Unsupported interview type: ${interviewType}`);
    }

    const parts = instructions.map((instruction) => ({ text: instruction }));

    const content = {
        role: "model",
        parts: parts,
    };

    return content;
}

export { getSystemInstructionsByInterviewType };