import React from 'react';
import {ThemeProvider} from '@material-ui/core'  
import Theme from './theme'

import Header from './components/Header'
import BackgroundTitle from './components/BackgroundTitle'


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header/>
      <BackgroundTitle />
    </ThemeProvider>
  );
}


export default App;
