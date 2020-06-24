import React from 'react';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import { useStyles } from '../utils/customStyles';

const houseUrl = `${process.env.PUBLIC_URL}/imgs/house-demo.png`;
export const HouseDetails = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid container className={classes.houseImages}>
        <GridList className={classes.gridList} cols={3}>
          {[...Array(7).keys()].map((image, imageIndex) => (
            <GridListTile key={imageIndex} cols={1}>
              <img src={houseUrl} alt={`House info num ${imageIndex + 1}`} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
};
