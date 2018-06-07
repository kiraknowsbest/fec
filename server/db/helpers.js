const Videos = require('./videos.js')

module.exports = {
	findOneVideo: function (videoId, cb) {
		Videos.findOne({videoId: videoId}, function (err, data) {
			if (err) {
				cb(err, null)
			} else {
				cb(null, data)
			}
		})
	}
}