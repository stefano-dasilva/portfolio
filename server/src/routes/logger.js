import express from "express"
import logger from "../middleware/logger.js"
import log from "../controllers/logger.js"


const router = express.Router()

router.use(logger)

router.route("/").get(log)

export {router as logroute}