import React from 'react';
import Sidebar from './components/Sidebar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './assets/scss/index.scss';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar/>
      {/* <h1>My Portfolio Take Care Sweet</h1> */}
    </ThemeProvider>
  );
}
 
export default App;
