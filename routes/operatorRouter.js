import express from "express"
import { createOperator } from "../controllers/operatorController"

const router = express.Router()

router.post("", createOperator)

export default router