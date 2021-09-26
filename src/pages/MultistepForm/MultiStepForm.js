import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import { DataFromProvider } from '../../store/context/FormContext';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Result } from './Result';

const MultiStepForm = () => {
  let { path, url } = useRouteMatch();
  console.log(path);
  return (
    <DataFromProvider>
      <Switch>
        <Route exact path={path} component={Step1} />
        <Route
          exact
          path={`${path}/step2`}
          component={Step2}
        />
        <Route
          exact
          path={`${path}/step3`}
          component={Step3}
        />
        <Route
          exact
          path={`${path}/result`}
          component={Result}
        />
      </Switch>
    </DataFromProvider>
  );
};

export default MultiStepForm;
