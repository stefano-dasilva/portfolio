import winston from "winston";
import WinstonTelegram from "winston-telegram";
const log = async (req, res) => {
  try {
    const telegramTransport = new WinstonTelegram({
      token: process.env.TELEGRAM_TOKEN,
      chatId: process.env.CHAT_ID,
    });

    telegramTransport.setMaxListeners(20);

    const logger = winston.createLogger({
      transports: [telegramTransport],
    });
    const logmessage = `${new Date()} - IP: ${req.ip} - ${req.method} ${
      req.url
    }\n`;
    logger.info(logmessage);
    return res.status(201).json({ message: "OK", date: new Date() });
  } catch (err) {
    return res.status(401).json({ message: "error", date: new Date() });
  }
};

export default log;
