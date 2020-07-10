import React from 'react';
import queryString from 'query-string';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../utils/customStyles';
import { HousesGrid } from '../components';

export const MoreHouses = ({ location, history }) => {
  const classes = useStyles();
  const { area } = queryString.parse(location.search);
  return (
    <Grid className={classes.container}>
      <Typography variant='h2' gutterBottom>
        Houses:{area ? area : 'all'}
        <hr />
      </Typography>
      <HousesGrid page={1} pageSize={20} area={area} history={history} />
    </Grid>
  );
};
