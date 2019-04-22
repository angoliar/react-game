import React, {Component} from 'react';
import {Header, Field, Button, Popup} from "./Components";
import {defaultMilliseconds} from "./consts";

class App extends Component {
    state = {
        pending: false,
        milliseconds: defaultMilliseconds,
        userScore: 0,
        computerScore: 0,
    };

    handleChangeMilliseconds = e => {
        this.setState({milliseconds: e.target.value});
    };

    handleStartGame = () => {
        console.log('start');
    };

    render() {
        const {milliseconds, userScore, computerScore, pending} = this.state;
        return (
            <div>
                <Header
                    milliseconds={milliseconds}
                    userScore={userScore}
                    computerScore={computerScore}
                    handleChangeMilliseconds={this.handleChangeMilliseconds}
                    pending={pending}
                />
                <Field/>
                <Button handleClick={this.handleStartGame}/>
                <Popup
                    userScore={userScore}
                    computerScore={computerScore}
                />
            </div>
        );
    }
}

export default App;
