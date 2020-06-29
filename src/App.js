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

sessionService.initSessionService(store, {
  driver: 'COOKIES',
  expires: process.env.REACT_APP_EXPIRES,
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
