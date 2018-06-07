// imports
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const path = require('path')
const helpers = require('./db/helpers')
const findOneVideo = helpers.findOneVideo

// middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ 'extended': false }));
server.use(express.static(path.join(__dirname, '../client/')));

server.get('/api/video/:videoId', (req, res) => {
	console.log('videoId: ', req.params.videoId)
	findOneVideo(req.params.videoId, (err, data) => {
		res.setHeader('Content-Type', 'application/json')
		if (err) {
			res.status(500).json(err)
		} else {
			res.status(200).json(data)
		}
	})
})

const port = process.env.port || 3003

server.listen(port, () => {
	console.log(`listening on port ${port}`)
})
