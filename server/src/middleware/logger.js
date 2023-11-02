import winston from "winston";
import WinstonTelegram from "winston-telegram";

const telegramTransport = new WinstonTelegram({
  token: process.env.TELEGRAM_TOKEN,
  chatId: process.env.CHAT_ID,
});

telegramTransport.setMaxListeners(20);

const logger = winston.createLogger({
  transports: [telegramTransport],
});

const loggermiddleware =   (req, res, next) => {
  const logmessage = `${new Date()} - IP: ${req.ip} - ${req.method} ${
    req.url
  }\n`;
  logger.info(logmessage);+
    console.log("entrato")

  next();
};

export default loggermiddleware;
