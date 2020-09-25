import React from 'react';
import Texty from 'rc-texty';

import { makeStyles, Container } from '@material-ui/core';

import Iconos from './Iconos'

const BackgroundTitle = () => {
    const classes = useStyles();

    return (
        <Container className={classes.back}>
            <Texty
                className={classes.hello}
                type="mask-top"
                delay={200}
            >
                Hi there, I'm Misa!
            </Texty>
            <Texty
                className={classes.stuff}
                type="flash"
                delay={1500}
                interval={10}
            >
                Developer who loves JS
            </Texty>
            <Iconos color="white"/>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    back: {
        backgroundImage: 'url(./img/back.jpg)',
        height: '30rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        maxWidth: '2000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            height: '23rem',
        }
    },
    hello: {
        fontSize: '6rem',
        color: '#96d117',
        fontWeight: 700,
        borderBottom: '.2rem solid #5945a1',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        }
    },
    stuff: {
        color: 'white',
        fontWeight: 700,
        fontSize: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    follow: {
        color: 'white',
        fontWeight: 400,
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem'
        }
    },
    containerIcons: {
        display: 'flex',
        justifyContent: 'center'
    },
    icons: {
        color: 'white',
        paddingTop: '10px'
    }
}));

export default BackgroundTitle;