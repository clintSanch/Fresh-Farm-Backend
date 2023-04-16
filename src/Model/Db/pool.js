import { Pool } from 'pg';
require('dotenv').config({path: _dirname + '../.env'});

const pool = new Pool({
    connectionString: process.env.DB_URL
});

const connection = await pool.connect();

try {
    const result = await connection.query('SELECT * FROM produce_details WHERE ')
} catch (error) {
    process.exit(-1);
}finally{
    await connection.release();
}

export default pool;