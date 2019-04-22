import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, InputBase, Chip, InputLabel} from '@material-ui/core';
import {header as styles} from '../Styles';

class Header extends Component {
    render() {
        const {classes, milliseconds, handleChangeMilliseconds, userScore, computerScore, pending} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            The game
                        </Typography>
                        <InputLabel className={classes.label}>
                            Milliseconds:
                        </InputLabel>
                        <div className={classes.search}>
                            <InputBase
                                placeholder="Milliseconds"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                value={milliseconds}
                                onChange={handleChangeMilliseconds}
                                disabled={pending}
                            />
                        </div>
                        <Chip
                            label={`User score: ${userScore}`}
                            className={classes.chip}
                        />
                        <Chip
                            label={`Computer score: ${computerScore}`}
                            className={classes.chip}
                        />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
