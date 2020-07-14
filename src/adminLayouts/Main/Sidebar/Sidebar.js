import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

import { Profile } from './Profile';
import { SidebarNav } from './SidebarNav';
import { getSessionUser } from '../../../helpers/sessionUtils';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

export const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const authAuser = getSessionUser();
  const isAdmin = parseInt(authAuser.a_level) === 1;
  const userPages = [
    {
      title: 'Dashboard',
      href: '/admin/dashboard',
      icon: <DashboardIcon />,
    },
    {
      title: 'Houses',
      href: '/admin/houses',
      icon: <ShoppingBasketIcon />,
    },
    {
      title: 'Account',
      href: '/admin/account',
      icon: <AccountBoxIcon />,
    },
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: <SettingsIcon />,
    },
  ];
  const adminPages = [
    {
      title: 'Dashboard',
      href: '/admin/dashboard',
      icon: <DashboardIcon />,
    },
    {
      title: 'Users',
      href: '/admin/users',
      icon: <PeopleIcon />,
    },
    {
      title: 'Houses',
      href: '/admin/houses',
      icon: <ShoppingBasketIcon />,
    },
    {
      title: 'Account',
      href: '/admin/account',
      icon: <AccountBoxIcon />,
    },
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: <SettingsIcon />,
    },
  ];
  const pages = isAdmin ? adminPages : userPages;
  return (
    <Drawer
      anchor='left'
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};
