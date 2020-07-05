import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersTable, AdminToolbar } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));
export const AdminUsers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AdminToolbar searchTitle='Search user' btnTitle='Add a new user' />
      <div className={classes.content}>{<UsersTable users={[]} />}</div>
    </div>
  );
};
