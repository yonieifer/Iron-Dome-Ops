import { get } from "../repositories/baseRepo"

export const findOperatorById = async (id) => {
    const [result] = await get("operators", {id: id})
    return result[0]
}