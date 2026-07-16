import express  from "express"
import operatorRouter from "./routes/operatorRouter.js"
import incidentRouter from "./routes/incidentRouter.js"

const app = express()

app.use(express.json())

app.use("/operator", operatorRouter)

app.use("/incidents", incidentRouter)

