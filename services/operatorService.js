import { create, get, update, remove } from "../repositories/baseRepo.js";

export const createOperator = async(data) => {
    const id = await create("operators", data)
    return id
}
