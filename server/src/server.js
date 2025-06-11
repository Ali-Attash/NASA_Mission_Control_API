const http = require('http');
const express = require('./app')
const PORT = 5500;
const connectionToDb = require('./database/mongodb');
const { loadPlanetsData } = require('./data/planet.service');

async function serverStart() {
    await connectionToDb()
    await loadPlanetsData();

    const server = http.createServer(express)

    server.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`)
})
}
serverStart()



