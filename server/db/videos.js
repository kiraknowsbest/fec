const mongoose = require('mongoose')
const db = require('./index.js')

const videoSchema = new mongoose.Schema({
	videoId: String,
	title: String,
	description: String,
	publishedAt: Date,
	channelAvatar: String,
	channelTitle: String,
	channelVerified: Boolean,
	views: Number,
	upVotes: Number,
	downVotes: Number,
	category: String,
	license: String
})

const Videos = mongoose.model('Videos', videoSchema, 'Videos')

module.exports = Videos
