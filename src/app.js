import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from './routes/user.routes.js';

const app = express();

// Set up CORS middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Ensure CORS_ORIGIN environment variable is set
    credentials: true
}));

// Middleware to parse JSON and urlencoded request bodies
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies
app.use(cookieParser());

// Mount the userRouter at the "/api/v1/users" path
app.use("/api/v1/users", userRouter);

// Error handling middleware (if needed)

export { app };