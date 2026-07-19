import { create, get, update, remove } from "../repositories/baseRepo.js";
import { findOperatorById } from "../utils/utils.js";


export const createIncident = async (data) => {
    const {code_name, threat_level, operator_id} = data
    
    if (!["RED SKY", "BLACK FALCON", "IRON SHIELD", "NIGHT ARROW", "SILENT DOME"].includes(code_name)) {
        throw new Error("invalid code name")
    }
    if (!["LOW", "MEDIUM", "HIGH", "CRITICAL"].includes(threat_level)) {
        throw new Error("invalid threat level")
    }
    const operator = await findOperatorById(+operator_id)
    
    if (!operator) {
        throw new Error(`no operator ${operator_id}`)
    }
    const incidentData = {
        code_name: code_name,
        threat_level: threat_level,
        status: "OPEN",
        operator_id: operator_id
    }
    const newId = await create("incidents", incidentData)
    return newId
}

export const changeStatus = async (status, id) => {
    if (!["TRACKING", "INTERCEPTED", "CLOSED"].includes(status)) {
        throw new Error("invalid status")
    }
    const is_updated = await update("incidents", {status: status}, {id: id})
    return is_updated
}

export const showAllIncidents = async () => {
    const allIncidents = await get("incidents", {})
    return allIncidents
}