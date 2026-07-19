import * as incidentsService from "../services/incidentsService.js"

export const createIncident = async (req, res) => {
    try {
        const {code_name, threat_level, operator_id} = req.body
        console.log();
        
    const id = await incidentsService.createIncident({code_name: code_name, threat_level: threat_level, operator_id: operator_id})
    res.status(201).send(`created | id: ${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const changeStatus = async (req, res) => {
    const status = req.body.status
    const id = req.params.id
    const is_updated = await incidentsService.changeStatus({status: status}, {id: id})
    if (is_updated) {
        res.send(`status changed: ${status}`)
    }
}

export const getAllIncidents = async (req, res) => {
    const all = await incidentsService.showAllIncidents()
    res.send(all)
}