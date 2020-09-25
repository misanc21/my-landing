import React from 'react';
import {makeStyles} from '@material-ui/core';
const Footer = () => {
    const classes = useStyles();
    return ( 
    <footer className={classes.back}>
        <h1>wfwe</h1>
    </footer> );
}

const useStyles = makeStyles((theme) => ({
    back: {
        backgroundColor: 'black',
        height: '20rem',
        maxWidth: '2000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            height: '23rem',
        }
    },
}));
export default Footer;