import React, {Component} from 'react';
import {Header, Field, Button, Popup} from "./Components";
import {defaultMilliseconds, fieldSize} from "./consts";

class App extends Component {
    state = {
        pending: false,
        milliseconds: defaultMilliseconds,
        userScore: 0,
        computerScore: 0,
        squares: [],
        square: null,
        validationError: false,
    };

    timer = null;

    componentDidMount = () => {
        this.createSquares();
    };

    handleChangeMilliseconds = e => {
        const milliseconds = parseInt(e.target.value);
        if (!milliseconds || milliseconds <= 0) {
            this.setState({
                validationError: true,
                milliseconds: 0,
            });
            return;
        }
        this.setState({
            validationError: false,
        });

        this.setState({milliseconds});
    };

    handleCloseModal = () => {
        this.setState({
            pending: false,
            userScore: 0,
            computerScore: 0,
        });
        this.createSquares();
    };

    startGame = () => {
        const {milliseconds, validationError} = this.state;
        if (validationError) {
            return;
        }
        this.activateNewSquare();
        this.setState({
            pending: true,
        });
        this.timer = setTimeout(this.scoreToComputer, milliseconds);
    };

    finishGame = () => {
        this.setState({pending: false});
        clearTimeout(this.timer);
    };

    handleClickOnSquare = i => () => {
        const {squares} = this.state;

        if (squares[i].status !== 'active') {
            return null;
        }
        setTimeout(this.scoreToUser, 0);
    };

    render() {
        const {milliseconds, userScore, computerScore, pending, squares, validationError} = this.state;
        return (
            <div>
                <Header
                    milliseconds={milliseconds}
                    userScore={userScore}
                    computerScore={computerScore}
                    handleChangeMilliseconds={this.handleChangeMilliseconds}
                    pending={pending}
                    validationError={validationError}
                />
                <Field
                    squares={squares}
                    handleClick={this.handleClickOnSquare}
                />
                <Button
                    handleClick={this.startGame}
                    pending={pending}
                />
                <Popup
                    userScore={userScore}
                    computerScore={computerScore}
                    pending={pending}
                    handleClose={this.handleCloseModal}
                />
            </div>
        );
    }

    createSquares = () => {
        const squares = [];
        for (let x = 1; x <= fieldSize; x++) {
            for (let y = 1; y <= fieldSize; y++) {
                squares.push({
                    x,
                    y,
                    status: 'inactive',
                })
            }
        }
        this.setState({squares});
    };

    getRandomSquare = () => {
        const {squares} = this.state;
        if (!squares.length) {
            return null;
        }
        const filtered = squares.map((square, i) => {
            if (square.status === 'inactive') {
                return i;
            }
            return null
        }).filter(item => item !== null);

        return filtered[Math.floor(Math.random() * filtered.length)];
    };

    activateNewSquare = () => {
        const {squares} = this.state;
        const square = this.getRandomSquare();
        if (!squares[square]) {
            return null;
        }
        squares[square].status = 'active';
        this.setState({
            squares,
            square
        });
    };

    checkFinish = () => {
        const {userScore, computerScore} = this.state;
        if (userScore === fieldSize || computerScore === fieldSize) {
            this.finishGame();
        } else {
            this.activateNewSquare();
        }
    };

    scoreToUser = () => {
        const {squares, square, userScore, milliseconds} = this.state;

        squares[square].status = 'clicked';
        this.setState({
            squares,
        });
        this.setState({
            userScore: userScore + 1,
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(this.scoreToComputer, milliseconds);
        this.checkFinish();

    };

    scoreToComputer = () => {
        const {computerScore, squares, square, milliseconds} = this.state;
        squares[square].status = 'missed';
        this.setState({
            squares,
        });
        this.setState({
            computerScore: computerScore + 1,
        });
        this.timer = setTimeout(this.scoreToComputer, milliseconds);
        this.checkFinish();
    };
}

export default App;
