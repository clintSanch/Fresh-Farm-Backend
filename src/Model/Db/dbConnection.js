const pool = require('./pool');


pool.on('connect', () => {
    console.log(`connected to the Database.`)
})

/**
 * On connection,
 * Create Tables in the Database 
 * only If tables does not exit
 */

const createUserDetailsTable = () => {
    const createUserDetailsTable = `CREATE TABLE IF NOT EXIST user_details (
        user_id serial primary key,
        firstname varchar(50) not null,
        lastname varchar(50) not null,
        email varchar(30) not null,
        phone_number integer not null
    )`
}

const createProduceDetailsTable = () => {
    const createProduceDetailsTable = `CREATE TABLE IF NOT EXIST produce_details (
        produce_id serial primary key,
        produce_name varchar(50) not null,
        quantity integer not null
    )`
}


pool.on('remove', () => {
    console.log('Database exit safely');
    process.exit(0);
})

module.exports = { createUserDetailsTable, createProduceDetailsTable };
