// imports
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const path = require('path')

// middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ 'extended': false }));
server.use(express.static(path.join(__dirname, '../client/')));

const port = process.env.port || 3003

server.listen(port, () => {
	console.log(`listening on port ${port}`)
})
