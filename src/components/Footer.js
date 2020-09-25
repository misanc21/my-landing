import React from 'react';
import {makeStyles, Grid, Paper, Typography} from '@material-ui/core';
import Iconos from './Iconos'
const Footer = () => {
    const classes = useStyles();
    return ( 
    <footer className={classes.back} spacing={3}>
        <Grid container className={classes.container}>
            <Grid item sm={8}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.legend}>Follow me</Typography>
                    <Iconos color="green"/>
                    <Typography variant="body2" className={classes.powered}>Powered by Trisc</Typography>
                </Paper>
            </Grid>
        </Grid>
    </footer> );
}

const useStyles = makeStyles((theme) => ({
    back: {
        flexGrow:1,
        marginTop:'2rem',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '2000px',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        margin : '.5rem',
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: 'black',
      },
    legend : {
        color: '#96d117',
        fontWeight: 'bold'
    },
    powered : {
        color: 'white',
        fontWeight: '400',
        marginTop: '1rem'
    }

}));
export default Footer;