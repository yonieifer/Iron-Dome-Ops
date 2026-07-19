import { create } from "../repositories/baseRepo.js"

export default async (action, incident_id, operator_id, description,) => {
    await create("logs", {
        action: action,
        incident_id: incident_id,
        operator_id: operator_id,
        description: description
    })
}