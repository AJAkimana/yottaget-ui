import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));
export const Users = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>{<UsersTable users={[]} />}</div>
    </div>
  );
};
