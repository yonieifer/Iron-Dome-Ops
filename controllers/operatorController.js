import * as operatorService from "../services/operatorService.js"
import { get } from "../repositories/baseRepo.js"

export const createOperator = async (req, res, next) => {
    try {
        const {name, level} = req.body
    const id = await operatorService.createOperator({name: name, level: level})
    res.status(201).send(`created | id: ${id}`)
    } catch (error) {
        next(error);
    }
}

export const getAllOperators = async (req, res) => {
    const all = await get("operators")
    res.send(all)
}