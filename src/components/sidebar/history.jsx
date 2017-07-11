import React from 'react'

export default class History extends React.Component {
	constructor(props) {
		super(props)
        this.state = {
            history: []
        }
	}

	makeList = pastGuesses => {
		const list = pastGuesses.map((guess, index) => {
			return (
				<li key={index}>
					{guess}
				</li>
			)
		})
        return list
	}
	render() {
		const guesses = this.makeList(this.props.history)
		return (
			<ul>
				{guesses}
			</ul>
		)
	}
}
