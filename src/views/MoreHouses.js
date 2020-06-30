import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../utils/customStyles';
import { HousesGrid } from '../components';

export const MoreHouses = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Typography variant='h2' gutterBottom>
        Houses:All
        <hr />
      </Typography>
      <HousesGrid page={1} pageSize={20} />
    </Grid>
  );
};
