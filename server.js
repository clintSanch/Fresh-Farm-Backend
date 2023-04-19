require('dotenv').config({ path: __dirname + '.env'});

import express from 'express';
const cors = require('cors');
const postgres = require('pg');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const allowedListDomains = ['http://localhost:4200', 'http://localhost:4000'];

const corsOptionsDelegate = (req, callback) => {
    let corsOptions;

    let isDomainAllowed = allowedListDomains.indexOf(req.header('origin')) !== -1;

    if (isDomainAllowed) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }

    callback(null, corsOptions);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptionsDelegate));

/**
 * method express.static()
 * is used to serve static files such as 
 * images, CSS files, and JavaScript files
 */
app.use(express.static(process.cwd() + '/FreshFarm/dist/HybridFreshFarm/Browser'));
app.use(express.static(process.cwd() + '/FreshFarm/Dist/HybridFreshFarm/server'));

app.get('*', (req, res) => {
    res.sendFile(__dirname, '/FreshFarm/dist/HybridFreshFarm/Browser/index.html')
});

//app.use('/', require('./src/Routes'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

module.exports = app;