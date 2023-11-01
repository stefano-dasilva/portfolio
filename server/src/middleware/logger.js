import winston from "winston";
import WinstonTelegram from "winston-telegram";

const telegramTransport = new WinstonTelegram({
  token: process.env.TELEGRAM_TOKEN,
  chatId: process.env.CHAT_ID,
});

const logger = winston.createLogger({
  transports: [telegramTransport],
});

const loggermiddleware = (req, res, next) => {
  const logmessage = `${new Date()} - IP: ${req.ip} - ${req.method} ${
    req.url
  }\n`;
  logger.info(logmessage);

  next();
};

export default loggermiddleware;
