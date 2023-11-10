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

    const logger = winston.createLogger({
      transports: [telegramTransport],
    });
    const logmessage = `${new Date()} - IP: ${clientIP} - ${req.method} ${
      req.url
    }\n`;
    logger.info(logmessage);

    const visit_IP = req.ip;

    const newlog = new LoggerModel({
      date: date,
      IP: clientIP,
    });

    await newlog.save();

    return res.status(201).json({ message: "OK", date: new Date() });
  } catch (err) {
    return res.status(401).json({ message: "error", date: new Date() });
  }
};

export default log;
