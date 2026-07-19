import express  from "express"
import "dotenv/config"
import operatorRouter from "./routes/operatorRouter.js"
import incidentRouter from "./routes/incidentRouter.js"
import logger from "./middlewares/logger.js" 
import errorHandler from "./middlewares/errorHandler.js"

const app = express()

app.use("/", logger)

app.use(express.json())

app.use("/operators", operatorRouter)

app.use("/incidents", incidentRouter)

app.use("", errorHandler)

app.listen(process.env.PORT, () => console.log("listening..."))