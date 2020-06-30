import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { renderRoutes } from 'react-router-config';
import { store } from './redux/store';
import { routes } from './routes';
import { mainTheme } from './helpers/customTheme';
import { ToastContainer } from 'react-toastify';
import { sessionService } from 'redux-react-session';

const dt = new Date();
const expiredTime = new Date(dt.setDate(dt.getDate() + 7));
sessionService.initSessionService(store, {
  driver: process.env.REACT_APP_SESSION_DRIVER,
  expires: expiredTime,
  refreshOnCheckAuth: true,
});
export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <ToastContainer />
        <Router>{renderRoutes(routes)}</Router>
      </ThemeProvider>
    </Provider>
  );
};
