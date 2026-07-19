import { get } from "../repositories/baseRepo.js"

export const findOperatorById = async (id) => {
    const [result] = await get("operators", {id: id})
    return result
}