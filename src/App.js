import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { renderRoutes } from 'react-router-config';
import { store } from './redux/store';
import { routes } from './routes';
import { mainTheme } from './helpers/customTheme';
import { ToastContainer } from 'react-toastify';
import { SessionContext } from './components/utils';
import { getSessionCookie } from './helpers/sessionUtils';
// import { sessionService } from 'redux-react-session';

// (async () => {
//   const dt = new Date();
//   const expiredTime = new Date(dt.setDate(dt.getDate() + 7));
//   const validateSession = (session) => {
//     return true;
//   };
//   const options = {
//     refreshOnCheckAuth: true,
//     redirectPath: '/',
//     driver: process.env.REACT_APP_SESSION_DRIVER,
//     expires: expiredTime,
//     validateSession,
//   };
//   await sessionService.initSessionService(store, options);
// })();
export const App = () => {
  const [session] = useState(getSessionCookie());
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <ToastContainer />
        <SessionContext.Provider value={session}>
          <Router>{renderRoutes(routes)}</Router>
        </SessionContext.Provider>
      </ThemeProvider>
    </Provider>
  );
};
