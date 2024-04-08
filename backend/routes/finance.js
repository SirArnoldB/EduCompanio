import express from 'express';
import financeResourcesController from '../controllers/finance.js';

const router = express.Router();

router.get('/', financeResourcesController.getAllFinanceResources);
router.get('/:id', financeResourcesController.getFinanceResourceById);
router.post('/', financeResourcesController.createFinanceResource);
router.patch('/:id', financeResourcesController.updateFinanceResource);
router.delete('/:id', financeResourcesController.deleteFinanceResource);

export default router;