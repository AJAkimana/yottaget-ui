import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { toAccess } from '../../../helpers';
import { getSessionUser } from '../../../helpers/sessionUtils';

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
  // const { user } = useSelector(({ session }) => session);
  const sessionUser = getSessionUser();
  console.log('sessionuser', sessionUser);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt={sessionUser.names}
        className={classes.avatar}
        component={RouterLink}
        src={sessionUser.avatar}
        to='/settings'
      />
      <Typography className={classes.name} variant='h4'>
        {sessionUser.names}
      </Typography>
      <Typography variant='body2'>{toAccess(sessionUser.a_level)}</Typography>
    </div>
  );
};
