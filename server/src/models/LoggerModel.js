import mongoose from "mongoose";

const LoggerSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  IP: {
    type: String,
  },
});


export const LoggerModel = new mongoose.model("logger",LoggerSchema)