import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

export const Profile = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Kalisa Callixte',
    avatar: '/images/avatars/avatar_11.png',
    role: 'Administrator',
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt={user.name}
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to='/settings'
      />
      <Typography className={classes.name} variant='h4'>
        {user.name}
      </Typography>
      <Typography variant='body2'>{user.role}</Typography>
    </div>
  );
};