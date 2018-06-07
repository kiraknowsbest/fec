import React from 'react'

class VideoDetails extends React.Component {
	state = {
		fontFamily: 'Roboto, Ariel, sans-serif',
		fontWeight: 400
	}

	getViews = n => {
		if (n !== undefined) {
			return `${n.toLocaleString()} views`
		}
	}

	getVotes = (n, val = 'K') => {
		if (n !== undefined) {
			const s = n.toString()
			if (s.length > 6) {
				let newVal;
				if (val === 'K') {
					newVal = 'M'
				} else if (val === 'M') {
					newVal = 'B'
				} else {
					newVal = ''
				}
				return this.getUpVotes(s.substr(0, s.length - 3), newVal)
			} else {
				if (s.length <= 4) {
					if (s.length <= 3) {
						return s
					} else if (s.length === 4) {
						return `${s[0]}.${s[1]}${val}`
					}
				} else {
					if (s.length === 5) {
						return `${s.substr(0, 2)}.${s[2]}${val}`
					} else if (s.length === 6) {
						return `${s.substr(0, 3)}.${s[3]}${val}`
					}
				}
			}
		}
	}

	render () {
		console.log(this.props)
		return (
			<div
				style={{
					fontFamily: this.state.fontFamily,
					fontWeight: this.state.fontWeight,
					width: this.props.width
				}}>
				<p 
					style={{
						lineHeight: '24px',
						fontSize: '18px',
						color: 'rgba(17, 17, 17, 1)'
					}}>
					{this.props.title}
				</p>
				<div width={this.props.width / 2}>
					<span id='viewCount'
						style={{
							lineHeight: '20px',
							fontSize: '16px',
							color: 'rgba(17, 17, 17, 0.6)',
							float: 'left'
						}}>
						{this.getViews(this.props.views)}
					</span>
				</div>
				<div>
					<span id='share'
						style={{
							float: 'right',
							fontSize: '13px',
							fontWeight: 500,
							color: 'rgba(17, 17, 17, 0.4)',
							marginLeft: '15px'
						}}>
						<i className="fas fa-share"></i>
						SHARE
					</span>
					<span id='downVotes'
						style={{
							float: 'right',
							fontSize: '13px',
							fontWeight: 500,
							letterSpacing: '0.007px',
							color: 'rgba(17, 17, 17, 0.4)',
							marginLeft: '15px'
						}}>
						<i className="fas fa-thumbs-down"></i>
						{this.getVotes(this.props.downVotes)}
					</span>
					<span id='upVotes'
						style={{
							float: 'right',
							fontSize: '13px',
							fontWeight: 500,
							letterSpacing: '0.007px',
							color: 'rgba(17, 17, 17, 0.4)',
							marginLeft: '15px'
						}}>
						<i className="fas fa-thumbs-up"></i>
						{this.getVotes(this.props.upVotes)}
					</span>
				</div>
			</div>
		)
	}
}

export default VideoDetails