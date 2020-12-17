import express from 'express';
const router = express.Router();
import { getProduct, getProducts } from '../controllers/product.controller.js';

router.get('/', getProducts); 

router.get('/:id', getProduct);

export default router;