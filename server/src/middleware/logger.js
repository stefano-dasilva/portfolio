import winston from "winston";
import WinstonTelegram from "winston-telegram";

// Configura il trasporto di Telegram
const telegramTransport = new WinstonTelegram({
  token: "6896175365:AAE9OdBc-6jsiQ100BE7Mt7QSTgquByT0cI",
  chatId: "390795682",
});

// Configura il logger di Winston
const logger = winston.createLogger({
  transports: [telegramTransport],
});

const loggermiddleware = (req, res, next) => {
  const logmessage = `${new Date()} - ${req.method} ${req.url}\n`;
  logger.info(logmessage);

  next();
};

export default loggermiddleware;
