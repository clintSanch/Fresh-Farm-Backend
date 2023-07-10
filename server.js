if(process.env.NODE_ENVIRONMENT !== "production"){
    require("dotenv").config();
}

const express = require('express');
const cors = require('cors');
const postgres = require('pg');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const io = require('socket.io');
const jwt = require('jsonwebtoken');
const router = require('./src/Routes/authRoutes');
const expressGraphql = require('express-graphql');
const { graphqlHTTP } = expressGraphql;
const schema = require('./src/Schemas/authSchema');

const app = express();

console.log(process.env.DB_DATABASE);


const onlineClients = new Set();

app.use('/', router);

app.use(bodyParser.json());

const allowedListDomains = ['http://localhost:4200'];

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
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptionsDelegate));

app.use('/graphqlAPI', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

const path = require('path');

/**
 * Generating the JWT
 */
const token = jwt.sign({
    data: "78902"
},'secret-key', {expiresIn: 60*60});
//console.log(token);

const decodedToken = jwt.verify(token, 'secret-key');

/**
 * method express.static()
 * is used to serve static files such as 
 * images, CSS files, and JavaScript files
 */
app.use(express.static(path.join(__dirname, 'dist/HybridFreshFarm/Browser')));

/**app.get('/', (req, res) => {
    res.sendFile(__dirname, 'dist/HybridFreshFarm/Browser/index.html')
});*/

//app.use('/', require('./src/Routes'))

app.get('/produce_details', async(_req, res) => {
    try {
        const result = await res.json();
        res.send(result);
    } catch (error) {
        console.error('error has just occured')
        res.send('error has just occured')
    }finally{

        res.send('process is complete')
        console.log('process is complete')
    }
   
   console.log(result)
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

module.exports = app;