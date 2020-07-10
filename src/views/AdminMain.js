import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { Sidebar, Topbar } from '../adminLayouts/Main';
import { renderRoutes } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import { SessionContext } from '../components/utils';
import { getSessionUser } from '../helpers/sessionUtils';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: '100%',
  },
}));

export const AdminMain = ({ route, history }) => {
  const classes = useStyles();
  const session = useContext(SessionContext);
  const user = getSessionUser();
  // const { authenticated, user } = useSellocalStorage.setItem('currentUser', JSON.stringify(user));ector(({ session }) => session);
  const isUserAllowed = session && Number(user.a_level) < 3;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  if (isUserAllowed) {
    return <Redirect to='/' />;
  }
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} history={history} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {/* {children}
        <Footer /> */}
        {renderRoutes(route.routes)}
      </main>
    </div>
  );
};
