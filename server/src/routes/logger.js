import express from "express"
import loggermiddleware from "../middleware/logger.js"
import log from "../controllers/logger.js"


const router = express.Router()


router.route("/").post(log)

export {router as logroute}