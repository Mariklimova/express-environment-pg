const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    password: '',
    user: 'postgres',
    database: 'Skills'
})

module.exports = pool




