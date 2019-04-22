import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import {field as styles} from '../Styles';
import {fieldSize} from "../consts";

class Field extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    {this.getSquares().map(square => square)}
                </Paper>
            </div>
        );
    }

    getSquares = () => {
        const {classes} = this.props;
        const squares = [];
        for (let x = 1; x <= fieldSize; x++) {
            for (let y = 1; y <= fieldSize; y++) {
                squares.push(
                    <div
                        className={classes.square}
                        key={`${x}${y}`}
                    />
                )
            }
        }

        return squares
    }
}

Field.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Field);
