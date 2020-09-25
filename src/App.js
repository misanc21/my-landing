import React from 'react';
import {ThemeProvider} from '@material-ui/core'  
import Theme from './theme'

import Header from './components/Header'
import BackgroundTitle from './components/BackgroundTitle'
import Info from './components/Info'
import ProyectosListado from './components/ProyectosListado'
import Footer from './components/Footer'


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header/>
      <BackgroundTitle />
      <Info />
      <ProyectosListado />
      <Footer />
    </ThemeProvider>
  );
}


export default App;
