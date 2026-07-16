import * as operatorService from "../services/operatorService.js"
const createOperator = async (req, res) => {
    const {name, rank} = req.body
    const id = await operatorService.createOperator({name: name, rank: rank})
    res.statusCode(201).send(`created | id: ${id}`)
}