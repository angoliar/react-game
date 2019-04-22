import React, {Component} from 'react';
import {Header} from "./Components";

class App extends Component {
    state = {
        pending: false,
        milliseconds: 1000,
        userScore: 0,
        computerScore: 0,
    };

    handleChangeMilliseconds = e => {
        this.setState({milliseconds: e.target.value});
    };

    render() {
        const {milliseconds, userScore, computerScore, pending} = this.state;
        return (
            <div className="App">
                <Header
                    milliseconds={milliseconds}
                    userScore={userScore}
                    computerScore={computerScore}
                    handleChangeMilliseconds={this.handleChangeMilliseconds}
                />
            </div>
        );
    }
}

export default App;
