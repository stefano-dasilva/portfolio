import mongoose from "mongoose";

const LoggerSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  IP: {
    type: String,
  },
});


export const LoggerModel = new mongoose.model("logger",LoggerSchema)