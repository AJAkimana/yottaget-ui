import React from 'react';
import { useScrollTrigger, Fab, Zoom, Toolbar } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { useStyles } from '../utils/customStyles';
import { MainNavBar } from '../components';
import { renderRoutes } from 'react-router-config';

const ScrollTop = (props) => {
  const classes = useStyles();
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

export const Main = (props) => {
  return (
    <>
      <MainNavBar />
      <Toolbar disableGutters id='back-to-top-anchor' />
      {renderRoutes(props.route.routes)}
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
};
