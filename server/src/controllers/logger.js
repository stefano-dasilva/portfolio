import winston from "winston";
import WinstonTelegram from "winston-telegram";
import { LoggerModel } from "../models/LoggerModel.js";
const log = async (req, res) => {
  const { date } = req.body;

  try {
    const telegramTransport = new WinstonTelegram({
      token: process.env.TELEGRAM_TOKEN,
      chatId: process.env.CHAT_ID,
    });

    telegramTransport.setMaxListeners(20);

    const clientIP =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    
      const new_date = new Date()

      const formattedDate = new_date.toLocaleString("it-IT", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

    const logger = winston.createLogger({
      transports: [telegramTransport],
    });
    const logmessage = `${formattedDate} - IP: ${clientIP} - ${req.method} ${
      req.url
    }\n`;
    logger.info(logmessage);


    const newlog = new LoggerModel({
      date: formattedDate,
      IP: clientIP,
    });

    await newlog.save();

    return res.status(201).json({ message: "OK", date: new Date() });
  } catch (err) {
    return res.status(500).json({ message: "error", date: new Date() });
  }
};

export default log;
