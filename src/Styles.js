import {fade} from '@material-ui/core/styles/colorManipulator';
import {fieldSize} from "./consts";

const squareSize = 100 / fieldSize;

export const header = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        marginRight: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    toolbar: {
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            textAlign: 'center',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 3,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: 100,
    },
    chip: {
        margin: theme.spacing.unit,
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing.unit * 2,
        },
    },
    label: {
        color: '#fff',
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing.unit * 2,
            display: 'block',
        },
    },
});
export const field = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: `${theme.spacing.unit * 2}px auto`,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexWrap: 'wrap',
        width: 500,
        height: 500,
        [theme.breakpoints.down('xs')]: {
            width: 300,
            height: 300,
        },
    },
    square: {
        width: `${squareSize}%`,
        height: `${squareSize}%`,
        boxSizing: 'border-box',
        border: '1px solid #fff',
        flexShrink: 0,
        cursor: 'pointer',
    },
    inactive: {
        backgroundColor: 'blue',
    },
    active: {
        backgroundColor: 'yellow',
    },
    clicked: {
        backgroundColor: 'green',
    },
    missed: {
        backgroundColor: 'red',
    },
});
export const button = theme => ({
    root: {
        justifyContent: 'center',
        display: 'flex',
    },
    button: {
        margin: theme.spacing.unit,
    },
});
export const modal = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing.unit * 35,
        },
    },
    button: {
        margin: theme.spacing.unit,
    },
});