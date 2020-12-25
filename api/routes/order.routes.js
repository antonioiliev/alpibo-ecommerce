import express from 'express';
const router = express.Router();
import { addOrder, getOrderById } from '../controllers/order.controller.js';
import { protect } from '../middleware/auth.middleware.js';

router.post('/', addOrder);
router.get('/:id', protect, getOrderById); 

export default router;