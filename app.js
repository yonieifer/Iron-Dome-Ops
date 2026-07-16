import express  from "express"
import "dotenv/config"
import operatorRouter from "./routes/operatorRouter.js"
import incidentRouter from "./routes/incidentRouter.js"

const app = express()

app.use("/", (req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use(express.json())

app.use("/operators", operatorRouter)

app.use("/incidents", incidentRouter)

app.listen(process.env.PORT, () => console.log("listening..."))