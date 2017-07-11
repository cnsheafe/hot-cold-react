import React from 'react'
import Feedback from './feedback/feedback'
import Controls from './controls/controls'

export default class MainDisplay extends React.Component {
	constructor(props) {
		super(props)
        this.state = {
            feedback: null
        }
	}

    handleGuess = guess => {
        if (+guess === this.props.trueNumber) {
            this.setState({feedback: 'Correct!'})
        }
        else if(Math.abs(+guess-this.props.trueNumber) < 15) {
            this.setState({feedback: 'Hot!'})
        }
        else {
            this.setState({feedback: 'Cold...'})
        }
        this.props.onGuess(guess)
    }


	render() {
		return(
			<div>
				<Feedback feedback={this.state.feedback}/>
				<Controls onGuess={this.handleGuess}/>
			</div>
		)
	}
}
