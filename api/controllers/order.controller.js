import catchAsync from 'express-async-handler';
import mongoose from 'mongoose';
import Order from '../models/order.model.js';

export const addOrder = catchAsync(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalprice } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items for this order');
        return;
    } else {
        const order = new Order({
            orderItems, 
            shippingAddress, 
            paymentMethod
        });

        const createdOrder = await order.save();

        res.status(200).json(createdOrder);
    }
});

export const getOrderById = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (mongoose.Types.ObjectId.isValid(id)) {
        const order = await Order.findById(id);
        console.log('order with error', order);

        if (order) {
            res.json(order);
        } else {
            res.status(404);
            throw new Error('Order not found!');
        }
    } else {
        res.status(404);
        throw new Error('Order not found!');
    }
});