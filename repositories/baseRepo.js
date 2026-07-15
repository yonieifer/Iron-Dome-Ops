import mysql from "mysql2/promise"
import pool from "../db/dbConnection.js"

export const create = async (tableName, data) => {
    const keys = Object.keys(data)
    const values = Object.values(data)
    const placeHolders = values.map(() => "?")
    const query = `insert into ${tableName} (${keys}) VALUES (${placeHolders})`
    
}