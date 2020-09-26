import React from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';

const Cargando = () => {
    const classes = useStyles()
    return ( 
    <Grid container>
        <Grid item className={classes.root} xs={12}>
            <Paper className={classes.paper}>
            <Typography className={classes.titulo} variant="subtitle2">Cargando...</Typography>
            </Paper>
        </Grid>
    </Grid>
     );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        textAlign: 'center',
        flexFlow: 'column wrap'
    },
    cont: {
        minHeight: '20rem'
    },
    titulo: {
        color: '#541aa1',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        padding:'0 1rem'
    },
    paper: {
        margin: '2rem auto .5rem auto',
        textAlign: 'center',
        backgroundImage: 'url(/img/triangle-mosaic.png)',
        borderRadius: '10px',
        maxWidth:'10rem',
        opacity: '0.9',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
        }
    },
    linea: {
        width: '2px',
        textAlign: 'center',
        margin: '2rem auto',
        minHeight: '3rem'
    },
    desc: {
        color: 'White',
        fontWeight: '400',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '16rem'
        }
    },
}));
 
export default Cargando;