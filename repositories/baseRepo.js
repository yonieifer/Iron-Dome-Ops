import mysql from "mysql2/promise"
import pool from "../db/dbConnection.js"

export const create = async (tableName, data) => {
    const keys = Object.keys(data)
    const values = Object.values(data)
    const placeHolders = values.map(() => "?")
    const query = `INSERT INTO ${tableName} (${keys}) VALUES (${placeHolders})`

    const [result] = await pool.execute(query, values)
    const newId = result.insertId
    return newId
}

export const get = async (tableName, filter) => {
    const keys = Object.keys(filter)
    const values = Object.values(filter)
    let whereClause = ""

    if (keys.length > 0) {
        whereClause = " WHERE " + keys.map(key => key + "=?").join(" AND ")
    }
    const query = `SELECT * FROM ${tableName}` + whereClause
    const [result] = await pool.execute(query, values)
    return result
}

export const update = async (tableName, data, filter) => {
    const dataKeys = Object.keys(data)
    const filterKeys = Object.keys(filter)
    const values = [...Object.values(data), ...Object.values(filter)]
    const setClause = dataKeys.map(key => key + "=?").join(", ")
    const whereClause = filterKeys.map(key => key + "=?").join(" and ")
    const query = `UPDATE ${tableName} SET ${setClause} WHERE ${whereClause};`
    const [result] = await pool.execute(query, values)
    const is_updated = result.affectedRows > 0
    return is_updated
}

export const remove = async (tableName, filter) => {
    const keys = Object.keys(filter)
    const values = Object.values(filter)
    const whereClause = keys.map(key => key + "=?").join(" and ")
    const query = `DELETE FROM ${tableName} WHERE ${whereClause};`
    const [result] = await pool.execute(query, values)
    const is_updated = result.affectedRows > 0
    return is_updated
}