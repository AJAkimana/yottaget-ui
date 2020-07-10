import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersTable, AdminToolbar, AddUserDialog } from '../components';

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
  const [openUserDialog, setOpenUserDialog] = useState(false);

  return (
    <div className={classes.root}>
      <AddUserDialog
        isOpen={openUserDialog}
        setIsOpen={() => setOpenUserDialog(false)}
      />
      <AdminToolbar
        searchTitle='Search user'
        btnTitle='Add a new user'
        openDialog={() => setOpenUserDialog(true)}
      />
      <div className={classes.content}>{<UsersTable users={[]} />}</div>
    </div>
  );
};
