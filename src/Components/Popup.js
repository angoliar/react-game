import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Modal, Typography, Button} from '@material-ui/core';
import {modal as styles} from '../Styles';

class Popup extends Component {
    state = {
        open: false,
    };

    handleClose = () => {
        const {handleClose} = this.props;
        this.setState({open: false});
        handleClose();
    };

    componentDidUpdate = () => {
        const {pending, userScore, computerScore} = this.props;
        const {open} = this.state;
        if (!pending && (userScore || computerScore) && !open) {
            this.setState({open: true});
        }
    };

    render() {
        const {classes, userScore, computerScore} = this.props;
        return (
            <Modal
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div className={classes.paper}>
                    <Typography variant="h6">
                        The game is over
                    </Typography>
                    <Typography variant="subtitle1">
                        Your score: {userScore}
                    </Typography>
                    <Typography variant="subtitle1">
                        Computer score: {computerScore}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={this.handleClose}
                    >
                        Ok
                    </Button>
                </div>
            </Modal>
        );
    }
}

Popup.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    userScore: PropTypes.number.isRequired,
    computerScore: PropTypes.number.isRequired,
    pending: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Popup);
