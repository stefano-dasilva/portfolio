import express from "express";
import { logroute } from "./src/routes/logger.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://stefanodasilva.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use("/", logroute);

app.listen(process.env.PORT || 3001, () => console.log("Listening..."));
