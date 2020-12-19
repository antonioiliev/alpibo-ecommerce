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
    const user = await User.findById(req.user._id);
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

export const updateUserProfile = catchAsync(async (req, res) => {
    const { id, name, email, password } = req.body;
    
    const user = await User.findById(id);

    if (user) {
        if (email && email !== '' && email !== user.email) {
            const duplicateUser = await User.exists({ email });

            if (!duplicateUser) {
                user.email = email || user.email;
            } else {
                res.status(403);
                throw new Error('User email already exists!');
            }
        }

        if (name && name !== '' && name !== user.name) {
            user.name = name || user.name;
        }
        
        if (password && password !== '') {
            user.password = password;
        }

        const updatedUser = await user.save();
        res.json({
            id: updatedUser._id,
            email: updatedUser.email, 
            name: updatedUser.name,
            isAdmin: updatedUser.isAdmin,
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