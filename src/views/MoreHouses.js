import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../utils/customStyles';
import { House } from '../components/commons';

const houseUrl = `${process.env.PUBLIC_URL}/imgs/house-demo.png`;
export const MoreHouses = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid container spacing={2}>
        {[...Array(14).keys()].map((value) => (
          <Grid key={value} item md={4} sm={12}>
            <House
              houseUrl={houseUrl}
              name='With water and electricity'
              price='30000'
              utilities={['Water', 'Electricity', 'Hospital', 'Market']}
              location='Gitega'
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
