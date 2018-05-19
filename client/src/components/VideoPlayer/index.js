import React from 'react'

const VideoPlayer = props => {
	return (
		<div id="VideoPlayer">
			<iframe width={`${props.width}px`} height={`${props.height}px`}
				src={`https://www.youtube.com/embed/${props.videoId}`}>
			}
			</iframe>
		</div>
	)
}

export default VideoPlayer
