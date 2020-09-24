import React from 'react';
import {makeStyles, Container, Typography, Button} from '@material-ui/core';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";


const BackgroundTitle = () => {
    const classes = useStyles();
    return ( 
        <Container className={classes.back}>
            <Typography variant="h2" className={classes.hello}>Hi there, I'm Misa</Typography>
            <Typography variant="body1" className={classes.stuff}>Developer who loves JS </Typography>
            <Container className={classes.containerIcons}>
                <Button href="https://github.com/misanc21" target="_blank">
                    <FaGithub className={classes.icons} size='1.3em'/>
                </Button>
                <Button href="https://www.linkedin.com/in/misael-nivio-cortes-150034176/" target="_blank">
                    <FaLinkedin className={classes.icons} size='1.3em'/>
                </Button>
                <Button href="https://twitter.com/misanc21" target="_blank">
                    <FaTwitter className={classes.icons} size='1.3em'/>
                </Button>
                <Button href="https://api.whatsapp.com/send?phone=527713593993" target="_blank">
                    <FaWhatsapp className={classes.icons} size='1.3em'/>
                </Button>
            </Container>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    back: {
        backgroundImage: 'url(./img/back.jpg)',
        height: '30rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize:'cover',
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