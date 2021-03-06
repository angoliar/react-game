import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import classNames from 'classnames';
import {field as styles} from '../Styles';

class Field extends Component {
    render() {
        const {classes, squares, handleClick} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    {squares.map((square, i) => (
                        <div
                            className={classNames(classes.square, classes[square.status])}
                            key={`${square.x}${square.y}`}
                            onClick={handleClick(i)}
                        />
                    ))}
                </Paper>
            </div>
        );
    }
}

Field.propTypes = {
    classes: PropTypes.object.isRequired,
    squares: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Field);
