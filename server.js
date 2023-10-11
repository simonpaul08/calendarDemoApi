import express, { Router } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import googleRoutes from './routes/google.js';
import EventRoutes from './routes/event.js';

dotenv.config();
const app = express();
const router = Router();

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// routes 
app.use('/google', googleRoutes)
app.use('/events', EventRoutes);

app.listen(3124, () => {
    console.log('Server Running on PORT: 3124');
})


