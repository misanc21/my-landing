import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6" className={classes.typo}>
                        Misanc21
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
    typo: {
        color: '#7b93e8',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700
    }
}));

export default Header;