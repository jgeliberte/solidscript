import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography, Grid, AppBar, Toolbar,
    CssBaseline, useScrollTrigger, Button, Slide
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function NavBarHeader(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container>
                <Grid item xs="12">
                    <HideOnScroll {...props}>
                        <AppBar position='static'>
                            <Toolbar>
                                <Typography variant="h6" className={classes.title} >SOLID SCRIPT SOLUTIONS</Typography>
                                <Button color="inherit">About Us</Button>
                                <Button color="inherit">Contact Us</Button>
                            </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                    <Toolbar />
                </Grid>
            </Grid>
        </div>

    )
}

export default NavBarHeader