import express from "express";
import { logroute } from "./src/routes/logger.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://stefanodasilva.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use("/", logroute);

mongoose.connect(process.env.MONGO_URI);

app.listen(process.env.PORT || 3001, () => console.log("Listening..."));
