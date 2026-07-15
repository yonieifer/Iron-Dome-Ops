import { create, get, update, remove } from "../repositories/baseRepo.js";
import { findOperatorById } from "../utils/utils.js";


const createIncident = async (data) => {
    const {codeName, threatLevel, operatorId} = data

    if (!["RED SKY", "BLACK FALCON", "IRON SHIELD", "NIGHT ARROW", "SILENT DOME"].includes(codeName)) {
        throw new Error("invalid code name")
    }
    if (!["LOW", "MEDIUM", "HIGH", "CRITICAL"].includes(threatLevel)) {
        throw new Error("invalid threat level")
    }
    const operator = await findOperatorById(operatorId)
    if (!operator) {
        throw new Error(`no operator ${operatorId}`)
    }
    const incidentData = {
        codeName: codeName,
        threatLevel: threatLevel,
        status: "OPEN",
        operatorId: operatorId
    }
    const newId = await create("incidents", incidentData)
    return newId
}

const changeStatus = async (status) => {
    if (!["TRACKING", "INTERCEPTED", "CLOSED"].includes(status)) {
        throw new Error("invalid status")
    }
    const is_updated = await update("incidents", {status: status})
    return is_updated
}
