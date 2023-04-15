import { Pool } from 'pg';
require('dotenv').config({path: '/Fresh-Farm-Backend/.env'});

const pool = new Pool(process.env);

export default Pool;