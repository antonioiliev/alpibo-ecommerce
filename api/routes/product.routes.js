import express from 'express';
import catchAsync from 'express-async-handler';
import mongoose from 'mongoose';
const router = express.Router();
import Product from '../models/product.model.js';

router.get('/', catchAsync(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get('/:id', catchAsync(async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const product = await Product.findById(req.params.id);
        console.log('product', product);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found!' });
        }
    } else {
        res.status(404).json({ message: 'Not a valid query!' });
    }
}));

export default router;