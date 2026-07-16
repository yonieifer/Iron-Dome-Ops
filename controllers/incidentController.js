import * as incidentsService from "../services/incidentsService.js"

export const createIncident = async (req, res) => {
    const {codeName, threatLevel, operatorId} = req.body
    const id = await incidentsService.createIncident({codeName: codeName, threatLevel: threatLevel, operatorId: operatorId})
    res.statusCode(201).send(`created | id: ${id}`)
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