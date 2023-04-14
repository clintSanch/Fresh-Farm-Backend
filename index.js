require("dotenv").config();
import express from 'express';
const cors = require('cors');
const postgres = require('pg');
const router = require('./app');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();

const allowedListDomains = ['http://localhost:4200', 'http://localhost:4000'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;

    let isDomainAllowed = allowedListDomains.indexOf(req.header('origin')) !== -1;

    if(isDomainAllowed){
        corsOptions = {origin: true}
    }else{
        corsOptions = { origin: false}
    }

    callback(null, corsOptions);
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors(corsOptionsDelegate));

app.use(bodyParser.json());

app.use(express.static(process.cwd()+'FreshFarm/dist/HybridFreshFarm'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})

module.exports = app;