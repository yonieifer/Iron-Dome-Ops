import express from "express"
import { createIncident, changeStatus, getOpenIncidents } from "../controllers/incidentController.js"


const router = express.Router()

router.post("/", createIncident)

router.patch("/:id/status", changeStatus)

router.get("/open", getOpenIncidents)

export default router
