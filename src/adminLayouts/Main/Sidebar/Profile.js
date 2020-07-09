import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { toAccess } from '../../../helpers';
import { useSelector } from 'react-redux';

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
  const { user } = useSelector(({ session }) => session);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt={user.names}
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to='/settings'
      />
      <Typography className={classes.name} variant='h4'>
        {user.names}
      </Typography>
      <Typography variant='body2'>{toAccess(user.a_level)}</Typography>
    </div>
  );
};
