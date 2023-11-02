import express from "express";
import { logroute } from "./src/routes/logger.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://stefanodasilva.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use("/", logroute);

app.listen(process.env.PORT || 3001, () => console.log("Listening..."));
