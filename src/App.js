import React, {Component} from 'react';
import {Header, Field} from "./Components";
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
            </div>
        );
    }
}

export default App;
