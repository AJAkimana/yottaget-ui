import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { AdminToolbar, HousesTable } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));
export const AdminHouses = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AdminToolbar searchTitle='Search house' btnTitle='Add house' />
      <div className={classes.content}>{<HousesTable users={[]} />}</div>
    </div>
  );
};
