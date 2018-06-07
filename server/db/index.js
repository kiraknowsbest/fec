const mongoose = require('mongoose')
const mongoUri = 'mongodb://localhost/fec'

const db = mongoose.connect(mongoUri)

module.exports = db