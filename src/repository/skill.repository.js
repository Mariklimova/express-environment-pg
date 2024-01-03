const pool = require('../db');

async function getAllSkillDB() {
    const client = await pool.connect()
    const sql = 'SELECT * FROM environment';
    const data = (await client.query(sql)).rows;
    return data
}

async function getAllSkillByIdDB(id) {
    const client = await pool.connect()
    const sql = 'SELECT * FROM environment WHERE id = $1';
    const data = (await client.query(sql, [id])).rows;
    return data
}

async function createSkillDB(label, category, priority) {
    const client = await pool.connect()
    const sql = 'INSERT INTO environment(label, category, priority) VALUES ($1,$2,$3) RETURNING *';
    const { rows } = await client.query(sql, [label, category, priority]);
    return rows
}

async function updateSkillDB(id, label, category, priority) {
    const client = await pool.connect()
    const sql = 'UPDATE environment SET label =$2,category = $3,priority = $4 WHERE id = $1 RETURNING *';
    const { rows } = await client.query(sql, [id, label, category, priority]);
    return rows
}

async function deleteSkillDB(id) {
    const client = await pool.connect();
    const sql = 'DELETE FROM environment WHERE id = $1 RETURNING *';
    const { rows } = await client.query(sql, [id]);
    return rows
}

async function updateSkillOnReqDB(id, body) {
    const client = await pool.connect();
    const sql1 = 'SELECT * FROM environment WHERE id = $1'
    const { rows } = await client.query(sql1, [id]);

    const newSkill = { ...rows[0], ...body }
    const sql2 = 'UPDATE environment SET label = $2,category = $3 ,priority = $4 WHERE id = $1 RETURNING *';
    // const data = (await client.query(sql2, [id, newSkill.label, newSkill.category, newSkill.priority])).rows;
    // return data
    const { rows: rows2 } = await client.query(sql2, [id, newSkill.label, newSkill.category, newSkill.priority]);
    return rows2
}

module.exports = { getAllSkillDB, getAllSkillByIdDB, createSkillDB, updateSkillDB, deleteSkillDB, updateSkillOnReqDB }