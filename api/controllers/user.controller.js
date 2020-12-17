import catchAsync from 'express-async-handler';
import User from '../models/user.model.js';
import { generateToken } from '../utils/generate.token.js';

export const authUser = catchAsync(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.comparePasswords(password))) {
        res.json({
            id: user._id,
            email: user.email, 
            name: user.name,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

export const getUserProfile = catchAsync(async (req, res) => {
    const user = User.findById(req.user._id);
    if (user) {
        res.json({
            id: user._id,
            email: user.email, 
            name: user.name,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

export const registerUser = catchAsync(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User with this email address already exists');
    } 

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            id: user._id,
            email: user.email, 
            name: user.name,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

});