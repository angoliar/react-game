import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Button as ButtonMui} from '@material-ui/core';
import {button as styles} from '../Styles';

class Button extends Component {
    render() {
        const {classes, handleClick, pending} = this.props;
        return (
            <div className={classes.root}>
                <ButtonMui
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleClick}
                    disabled={pending}
                >
                    Play
                </ButtonMui>
            </div>
        );
    }
}

Button.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Button);
