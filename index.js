import express from 'express';
const cors = require('cors');
const postgres = require('pg');
const router = require('./app');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})

module.exports = app;