import express from 'express';
import mockAiInterviewsController from '../controllers/mock-ai-interviews.js';

const router = express.Router();

router.post('/mock-ai-interview', mockAiInterviewsController.createMockAIInterview);
router.get('/mock-ai-interview', mockAiInterviewsController.getAllMockAIInterviews);
router.get('/mock-ai-interview/:id', mockAiInterviewsController.getMockAIInterview);
router.post('/mock-ai-interview/conduct', mockAiInterviewsController.conductMockInterview);

export default router;