import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

// // App Config
// const app = express()
// const port = process.env.PORT || 4000

// // Connect services
// connectDB() 
// connectCloudinary()

// // Middlewares
// app.use(express.json())
// app.use(cors())

// // API Endpoints
// app.use('/api/user', userRouter)
// app.use('/api/product', productRouter)

// app.get('/', (req, res) => {
//   res.send('API Working')
// })

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio API running locally!!");
});

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
    console.log(" MongoDB connected successfully");
    app.listen(PORT, () => 
      console.log('server is running on port ${PORT}' )
    );
}).catch((err) => console.error(" MongoDB connection error:", err));