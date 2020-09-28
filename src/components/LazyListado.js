import React, {Suspense} from 'react';
import { useInView } from 'react-intersection-observer';
import { Grid, makeStyles } from '@material-ui/core';

import Cargando from './Cargando'
const ProyectosListado = React.lazy(()=> import('./ProyectosListado'))

const LazyListado = () => {
    const classes = useStyles()
    const { ref, inView } = useInView({ 
        rootMargin:'150px',
        threshold: 0
      });

    return (
        <Grid container ref={ref} className={classes.cont}>
            <Suspense fallback={<Cargando/>}>
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