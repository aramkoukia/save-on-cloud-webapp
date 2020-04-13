import React, { Suspense, lazy } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import * as serviceWorker from './serviceWorker';
import Pace from './shared/components/Pace';

const LoggedInComponent = lazy(() => import('./logged_in/components/Main'));

const LoggedOutComponent = lazy(() => import('./logged_out/components/Main'));

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Pace color={theme.palette.primary.light} />
          <Suspense fallback={<></>}>
            <Switch>
              <Route path="/c">
                <LoggedInComponent />
              </Route>
              <Route>
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Suspense>
        </MuiThemeProvider>
      </BrowserRouter>
    </Elements>
  );
}

serviceWorker.register();

export default App;
