const express = require('express');
const app = express();
const cors = require('cors')
const planetRouter = require('./routes/foundPlanets');


app.use(express.json());
app.use(cors());
app.use('/planets' , planetRouter)



module.exports = app;