import React from 'react'
import VideoPlayer from '../VideoPlayer/index'
import { debounce } from '../../helpers'

class VideoPlayerAndDetailsContainer extends React.Component {
	state = {
		width: 854,
		videoHeight: 480,
		selectedVideoId: 'bvhBxSOz_o8'
	}

	componentWillMount () {
		window.addEventListener('resize', () => {
			this.calculateSize()
		})
	}

	componentDidMount () {
		this.calculateSize()
	}

	calculateSize = debounce(() => {
		// keeping a video ratio of 16:9
		const ratioDifference = 9 / 16
		let width = Math.floor(window.innerWidth * .5),
			remainder = width % 16,
			multiplier = Math.floor(width / 16),
			height = Math.floor((9 * multiplier) + (remainder * (9 / 16)))
		this.setState({
			width: Math.max(width, 426),
			videoHeight: Math.max(height, 240)
		})
	}, 250, false)

	render () {
		return (
			<div>
				<VideoPlayer
					height={this.state.videoHeight}
					width={this.state.width}
					videoId={this.state.selectedVideoId}
				/>
			</div>
		)
	}
}

export default VideoPlayerAndDetailsContainer
