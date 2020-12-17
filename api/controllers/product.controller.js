import catchAsync from 'express-async-handler';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';

export const getProducts = catchAsync(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

export const getProduct = catchAsync(async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const product = await Product.findById(req.params.id);
        
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found!' });
        }
    } else {
        res.status(404).json({ message: 'Not a valid query!' });
    }
});