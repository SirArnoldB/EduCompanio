function getSystemInstructionsByInterviewType(interviewType) {
    switch (interviewType) {
        case "behavioral":
            return [
                "Focus on generating questions that assess soft skills and past experiences.",
                "Avoid questions that are too generic or hypothetical.",
                "Ensure the questions are relevant to the job role and company culture.",
            ];

        case "case":
            return [
                "Generate case questions that test problem-solving skills and analytical thinking.",
                "Provide relevant constraints and assumptions to guide the candidate's approach.",
                "Include an example scenario or data to make the case more realistic.",
            ];

        case "system-design":
            return [
                "Focus on generating system design questions that assess architectural and scalability knowledge.",
                "Include specific constraints and requirements for the system being designed.",
                "Provide an example use case or scenario to give context to the design problem.",
            ];

        case "technical":
            return [
                "Generate technical questions that test coding skills and algorithms.",
                "Include constraints and limitations to assess the candidate's ability to optimize solutions.",
                "Provide example inputs and expected outputs to clarify the problem statement.",
            ];

        default:
            throw new Error(`Unsupported interview type: ${interviewType}`);
    }
}

export { getSystemInstructionsByInterviewType };