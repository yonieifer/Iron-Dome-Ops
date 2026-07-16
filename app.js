import express  from "express"
import operatorRouter from "./routes/operatorRouter.js"

const app = express()

app.use(express.json())

app.use("/operator", operatorRouter)

