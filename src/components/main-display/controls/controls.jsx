import React from 'react'

export default class Controls extends React.Component {
	constructor(props) {
		super(props)
	}

    handleSubmit = event => {
        event.preventDefault()
        this.props.onGuess(event.target[0].value)
    }

	render() {
		return(
			<form id="guess-form" onSubmit={this.handleSubmit}>
				<span><input type="number"/></span>
				<span><button type="submit">Guess</button></span>
			</form>
		)
	}
}
