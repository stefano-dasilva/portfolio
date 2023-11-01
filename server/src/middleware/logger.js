import winston from "winston";
import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";

const logtail = new Logtail("mPozsMZwFeo6geJBNpPwMWdf");

const logger = winston.createLogger({
  transports: [new LogtailTransport(logtail)],
});

const loggermiddleware = (req, res, next) => {
  const logmessage = `${new Date()} - ${req.method} ${req.url}\n`;
  logger.info(logmessage);

  next();
};

export default loggermiddleware;
