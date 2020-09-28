import React, {useState} from 'react';
import { makeStyles, Typography, Button, CardMedia, CardContent, CardActions, Card, Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

import MadeWith from './MadeWith'

const Proyecto = ({datos}) => {
    const classes = useStyles();
    const {nombre, descripcion, link, madeWith, img, altImg} = datos
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt={altImg}
                height="180"
                image={img}
                title={nombre}
            />
            <CardContent className={classes.back}>
                <Typography variant="h6" className={classes.title}>
                    {nombre}
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                    </IconButton>
                </Typography>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>{descripcion}</Typography>
                    <div className={classes.madewith}>
                        {madeWith.map((l,i) =>{
                            return <MadeWith tool={l} key={i}/>
                        })}
                    </div>
                    <CardActions className={classes.actions}>
                        {link === ''?
                            <Typography variant="body2" color="textSecondary" component="p">No demo available</Typography>
                        :
                            <Button size="small" variant="contained" color="primary" href={link} target="_blank" fullWidth={true} className={classes.button}>
                                demo
                            </Button>
                        }
                    </CardActions>
                </Collapse>
            </CardContent>
        </Card>

    );
}

const useStyles = makeStyles((theme) =>({

    root: {
        backgroundImage: 'url(/img/triangle-mosaic.png)',
        maxWidth: 345,
        minWidth: 200,
        marginTop: '2rem',
        transition: '0.2s',
        [theme.breakpoints.down('sm')]: {
            marginRight: '3rem',
            marginLeft: '3rem',
        },
        '&:hover' : {
            transform: 'scale(1.1)',
            boxShadow: `0 0 12px 0 #b884e8`,
            
        },
    },
    title: {
        color: '#22ab1d',
        fontWeigth: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    back: {
        paddingTop: '8px',
        paddingLeft:'8px',
        paddingRight:'8px',
        paddingBottom:'2px!important',
    },
    madewith:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '.3rem'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      button : {
          marginTop:'1rem',
          backgroundColor: '#541aa1'
      },
      description: {
        marginBottom:'1rem',
      },
      actions: {
          display: 'flex',
          justifyContent: 'center'
      }
    
}));

export default Proyecto;