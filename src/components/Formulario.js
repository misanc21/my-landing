import React from 'react';
import {makeStyles,  Paper, TextField, Typography, Button} from '@material-ui/core';

const Formulario = () => {
    const classes = useStyles()
    return ( 
        <>
            <Typography variant="h5" className={classes.title}>Contact me!</Typography>
            <form className={classes.form}>
            <TextField
                id="email-input"
                label="Email"
                type="email"
                autoComplete="your email"
                variant="filled"
                className={classes.input}
            />
            <TextField
                id="message-email"
                label="Message"
                multiline
                rows={4}
                defaultValue="Write here"
                variant="filled"
            />
            <Button variant="contained" className={classes.button}>
                Send
            </Button>
            </form>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        padding: '.5rem 3rem',
        [theme.breakpoints.down('sm')]: {
            padding: '.5rem',
        }
    },
    input: {
        backgroundColor: 'white',
        marginBottom: '1rem'
    },
    title: {
        color: '#541aa1',
        fontWeight: 'bold',
        marginBottom: '0'
    },
    button: {
        marginTop: '1rem',
        marginBottom: '.5rem',
        backgroundColor: '#541aa1',
        color: 'white',
        fontWeight: 'bold'
    },
}));
 
export default Formulario;