import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { HousesLoading } from './HousesLoading';
import { House } from './commons';
import { useSelector, shallowEqual } from 'react-redux';
import { getHouses } from '../redux/actions';

const houseUrl = `${process.env.PUBLIC_URL}/imgs/house-demo.png`;
export const HousesGrid = ({ page, pageSize }) => {
  const { housesGet } = useSelector(({ housesGet }) => ({ housesGet }));
  useEffect(() => {
    getHouses(page, pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shallowEqual]);
  return (
    <Grid container spacing={2}>
      {housesGet.loading ? (
        <HousesLoading numberOfItems={3} />
      ) : housesGet.houses.length ? (
        housesGet.houses.map((house, houseIndex) => (
          <Grid key={houseIndex} item md={4} xs={12}>
            <House
              houseUrl={house.coverImage}
              name={house.name}
              price={house.price}
              utilities={house.utilities}
              location={house.location.name}
              slug={house.slug}
            />
          </Grid>
        ))
      ) : (
        <Grid item md={12} xs={12}>
          <House
            houseUrl={houseUrl}
            name={'Simple description'}
            utilities={[]}
            location={'Location'}
          />
        </Grid>
      )}
    </Grid>
  );
};
