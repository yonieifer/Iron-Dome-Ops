import * as operatorService from "../services/operatorService.js"
export const createOperator = async (req, res) => {
    try {
        const {name, level} = req.body
    const id = await operatorService.createOperator({name: name, level: level})
    res.status(201).send(`created | id: ${id}`)
    } catch (error) {
        console.log(error);
    }
}