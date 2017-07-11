import React from 'react'

export default class Feedback extends React.Component {
	constructor(props) {
		super(props)
	}


	render() {
        const output = this.props.feedback || "Guess between 1 and 100"

		return(
			<div>
				<p className="feedback">{output}</p>
			</div>
		)
	}
}
