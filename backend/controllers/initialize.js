import { initializeExamples } from "./initialize-examples.js";

const initializeExampleData = async (req, res) => {
    const userId = req.user.uid;

    await initializeExamples(userId);

    return res.status(200).send({ message: "Example data initialized" });
}

export default {
    initializeExampleData
}