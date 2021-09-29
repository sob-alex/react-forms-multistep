import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import FormikValidation from './components/FormikValidation';
import ReactHookForm from './components/ReactHookForm';
import Header from './components/Header';
import MultiStepForm from './pages/MultistepForm/MultiStepForm';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import RequireAuth from './routeGuard';



function App() {
  
  return (
    <div className='App'>
      <Router>
        <Header />
        <Container maxWidth='md'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/multistep'
              component={MultiStepForm}
            />
            <Route
              path='/formik'
              component={FormikValidation}
            />
            <RequireAuth>
              <Route
                path='/dashboard'
                component={Dashboard}
              />
            </RequireAuth>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
