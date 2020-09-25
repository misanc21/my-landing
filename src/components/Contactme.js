import React from 'react';
import Formulario from './Formulario'
import { makeStyles, Grid, Paper } from '@material-ui/core';

const Contactme = () => {
    const classes = useStyles();
    return (
        <div spacing={6}>
            <Grid container className={classes.back}>
            <Grid item xs={11} sm={6} md={5}>
                <Paper className={classes.paper} > 
                    <Formulario />
                </Paper>
            </Grid>
        </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    back: {
        flexGrow:1,
        marginTop:'2rem',
        minheight: '10rem',
        maxWidth: '2000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        margin : '.5rem',
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: 'white'
      },

}));
 
export default Contactme;