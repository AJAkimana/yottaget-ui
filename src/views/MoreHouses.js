import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from '../utils/customStyles';
import { House } from '../components/commons';
import { useSelector, shallowEqual } from 'react-redux';
import { getHouses } from '../redux/actions';

const houseUrl = `${process.env.PUBLIC_URL}/imgs/house-demo.png`;
export const MoreHouses = () => {
  const classes = useStyles();
  const { housesGet } = useSelector(({ housesGet }) => ({ housesGet }));
  useEffect(() => {
    getHouses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shallowEqual]);
  return (
    <Grid className={classes.container}>
      <Typography variant='h2' gutterBottom>
        View houses
        <hr />
      </Typography>
      <Grid container spacing={2}>
        {housesGet.loading ? (
          <>
            <Skeleton variant='rect' width={210} height={118} />
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width='60%' />
            </Box>
          </>
        ) : housesGet.houses.length ? (
          housesGet.houses.map((house, houseIndex) => (
            <Grid key={houseIndex} item md={4} sm={12}>
              <House
                houseUrl={house.coverImage}
                name={house.name}
                price={house.price}
                utilities={house.utilities}
                location={house.location.name}
              />
            </Grid>
          ))
        ) : (
          <Grid item md={12} sm={12}>
            <House
              houseUrl={houseUrl}
              name={'house.name'}
              price={'house.price'}
              utilities={[]}
              location={'house.location.name'}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
