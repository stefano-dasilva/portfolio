import express from "express";
import { logroute } from "./routes/logger.js";
import cors from "cors";

const PORT = 3001
const app = express()

app.use(express.json())
app.use(cors());

app.use("/", logroute)


app.listen(PORT, () => console.log("Listening..."))