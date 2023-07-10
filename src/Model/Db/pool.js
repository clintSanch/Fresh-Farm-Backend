require('dotenv').config({ path: __dirname + '../.env' });
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DB_URL
});

/**
 * the pool will emit an error on behalf of any idle clients
 *it contains if a backend error or network partition happens
 */
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
});

/**
 * promise - checkout a client
 */
pool.connect().then((client) => {
    return client.query(`SELECT * FROM produce_details WHERE produce_id = $101`)
    .then((res) => {
        client.release()
        console.log(res.rows[0])
    })
    .catch((err) => {
        client.release()
        console.log(err)
    })
});

export default pool;