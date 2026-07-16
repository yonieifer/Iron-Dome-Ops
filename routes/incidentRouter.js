import express from "express"
import { createIncident, changeStatus, getAllIncidents } from "../controllers/incidentController.js"


const router = express.Router()

router.post("/", createIncident)

router.patch("/:id/status", changeStatus)

router.get("/open", getAllIncidents)

export default router