import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Typography,
} from '@material-ui/core';
import Cookies from 'js-cookie';
import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { logoutUser } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import { sessionService } from 'redux-react-session';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

export const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  // const [notifications] = useState([]);
  const { loaded } = useSelector(({ userOut }) => userOut);
  useEffect(() => {
    if (loaded) {
      // sessionService.deleteSession();
      // sessionService.deleteUser();
      Cookies.remove('PHPSESSIONID');
      Cookies.remove('USER_DATA');
      toast('You have been logged out');
      setTimeout(() => {
        window.location.replace('/');
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to='/'>
          {/* <img alt='Logo' src='/images/logos/logo--white.svg' /> */}
          <Typography variant='h4'>Logo</Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          {/* <IconButton color='inherit'>
            <Badge
              badgeContent={notifications.length}
              color='primary'
              variant='dot'
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          <IconButton
            className={classes.signOutButton}
            onClick={() => logoutUser()}
            color='inherit'
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
