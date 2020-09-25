import React from 'react';
import {makeStyles, Grid, Paper} from '@material-ui/core';
const Footer = () => {
    const classes = useStyles();
    return ( 
    <footer className={classes.back} spacing={3}>
        <Grid container>
            <Grid item>
                <Paper className={classes.paper}> 
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
        minheight: '20rem',
        maxWidth: '2000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '23rem',
        }
    },
    paper: {
        margin : '.5rem',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

}));
export default Footer;