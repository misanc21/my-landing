import React from 'react';
import { makeStyles, Avatar } from '@material-ui/core';


const Madewith = ({tool}) => {
    const classes = useStyles();
    return ( 
        <Avatar alt="Remy Sharp" src={`../img/logos/${tool}.png`} className={classes.root}/>
     );
}

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '2px',
        maxWidth:'35px',
        maxHeight:'35px',
        margin: '0 .3rem'
    },
  }));
 
export default Madewith;