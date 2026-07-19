import express from "express"
import { createOperator, getAllOperators } from "../controllers/operatorController.js"

const router = express.Router()

router.post("/", createOperator)

router.get("/", getAllOperators)


export default router