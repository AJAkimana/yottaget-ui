import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { AdminToolbar, HousesTable, AddHouseDialog } from '../components';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <AddHouseDialog isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <AdminToolbar
        searchTitle='Search house'
        btnTitle='Add house'
        openDialog={() => setIsOpen(true)}
      />
      <div className={classes.content}>{<HousesTable users={[]} />}</div>
    </div>
  );
};
