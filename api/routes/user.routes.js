import express from 'express';
const router = express.Router();
import { authUser, getUserProfile, updateUserProfile, registerUser } from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

router.post('/login', authUser); 
router.get('/profile', protect, getUserProfile).put('/profile', updateUserProfile); 
router.post('/register', registerUser); 

export default router;