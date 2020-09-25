import React from 'react';
import { makeStyles, Typography, Grid, Paper, Avatar } from '@material-ui/core';
import imgAvatar from '../img/perfil.jpeg'
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';


const Info = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <OverPack style={{ overflow: 'hidden' }} >
                            <QueueAnim key="queue">
                                <Grid item key='a' className={classes.pothoCont}>
                                    <Avatar className={classes.avatar} src={imgAvatar} />
                                </Grid>
                            </QueueAnim>
                        </OverPack>
                        <OverPack className={classes.appearence}>
                            <Grid item className={classes.personal}>
                                <QueueAnim key="queue">
                                    <Typography key='a' variant="h2" className={classes.hello}>Misael Nivio Cortes</Typography>
                                    <Typography key='b' variant="h6" className={classes.who}>Computer systems engineer - Web developer</Typography>
                                    <Typography key='c' variant="h6" className={classes.who}>México, 23 years old</Typography>
                                    <Typography key='d' variant="h6" className={classes.litDesc}>I'm a Web developer with experience in React, Vue, Es6, Redux,  Node, Html5, CSS and more. Take a look to my public jobs</Typography>
                                </QueueAnim>
                            </Grid>
                        </OverPack>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    back: {
        maxWidth: '2000px',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            height: '23rem',
        }
    },
    hello: {
        color: '#541aa1',
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        }
    },
    who: {
        color: '#22ab1d',
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem'
        }
    },
    litDesc: {
        maxWidth: '600px',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem'
        }
    },
    appearence:{
        overflow: 'hidden',
        width: '75%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            minHeight: '15rem',
        }
    },
    personal: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        minHeight: '16rem',
        padding: '3rem 1.4rem',
        textAlign: 'center',
        backgroundImage: 'url(/img/triangle-mosaic.png)',
        borderRadius: '0',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
        }
    },
    pothoCont: {
        display: 'flex',
        justifyContent: 'center',
        minWidth: '400px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '300px',
            marginBottom: '1rem'
        }
    },
    avatar: {
        width: '250px',
        height: '250px',
        border: '10px solid #22ab1d',
        [theme.breakpoints.down('sm')]: {
            border: '6px solid #22ab1d',
            width: '150px',
            height: '150px',
        }
    },

}));

export default Info;