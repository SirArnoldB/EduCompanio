function getPromptByInterviewType(interviewType, company, level) {
    const basePrompt = `Generate an interview question for a college ${level} student preparing for a ${interviewType} interview${company ? ` at ${company}` : ""}.`;

    switch (interviewType) {
        case "behavioral":
            return `${basePrompt}
      
      Please provide the output in the following markdown format:
      ##### Question
      A behavioral interview question
      `;

        case "case":
            return `${basePrompt}
      
      Please provide the output in the following markdown format:
      ##### Question
      A case interview question
      
      ##### Constraints
      Any constraints or assumptions for the case
      
      ##### Example
      An example scenario or data related to the case
      `;

        case "system-design":
            return `${basePrompt}
      
      Please provide the output in the following markdown format:
      ##### Question
      A system design interview question
      
      ##### Constraints
      Any constraints or requirements for the system
      
      ##### Example
      An example use case or scenario for the system
      `;

        case "technical":
            return `${basePrompt}
      
      Please provide the output in the following markdown format:
      ##### Question
      A technical interview question
      
      ##### Constraints
      Any constraints or limitations for the problem
      
      ##### Example
      An example input and expected output for the problem
      `;

        default:
            throw new Error(`Unsupported interview type: ${interviewType}`);
    }
}

export { getPromptByInterviewType };