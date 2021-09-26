import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import store from './store/redux'
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e64926',
    },
    secondary: {
      main: '#F9A82E',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
