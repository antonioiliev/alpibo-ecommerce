import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/error.middleware.js';
import productRouter from './routes/product.routes.js';
import authRouter from './routes/user.routes.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/users', authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`ecommerce api listening on port ${process.env.PORT || 5000}`);
})