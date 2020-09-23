import React from 'react';
import {makeStyles, Container} from '@material-ui/core';

const BackgroundTitle = () => {
    const classes = useStyles();
    return ( 
        <Container className={classes.back}>
            <h1>jin</h1>
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
        position: 'absolute',
        maxWidth: '2000px'
    }
}));
 
export default BackgroundTitle;