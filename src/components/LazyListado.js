import React, {Suspense} from 'react';
import { useInView } from 'react-intersection-observer';
import { Grid, makeStyles } from '@material-ui/core';

import Cargando from './Cargando'
const ProyectosListado = React.lazy(()=> import('./ProyectosListado'))

const LazyListado = () => {
    const classes = useStyles()
    const { ref, inView } = useInView({ 
        threshold: 0.5
      });

    return (
        <Grid container spacing={6} ref={ref} className={classes.cont}>
            <Suspense fallback={<Cargando/>}>
                <p>efkjnekjnkjc djks   {inView.toString()}</p>
                {inView? <ProyectosListado /> : <Cargando/> }
            </Suspense>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    cont: {
        minHeight: '20rem',
        marginTop: '2rem'
    },
}));
 
export default LazyListado;