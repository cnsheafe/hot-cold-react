import React from 'react'
import MainDisplay from './components/main-display/main-display.jsx'
import History from './components/sidebar/history' 

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            history: [],
			guess: null,
            trueNumber: Math.floor(Math.random()*100) + 1
		}
	}

    addGuess = guess => {
        const history = this.state.history
        history.push(guess)
        this.setState({history: history})
    }

	render() {

		return(
			<div>
				<History history={this.state.history} />
				<MainDisplay trueNumber={this.state.trueNumber} onGuess={this.addGuess}/>
			</div>
		)
	}
}
