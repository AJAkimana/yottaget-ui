import React from 'react';
import { Grid, GridList, GridListTile, Paper } from '@material-ui/core';
import { useStyles } from '../utils/customStyles';

export const HouseImages = ({ coverImage, images, description }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      component={Paper}
      className={classes.houseImages}
      elevation={5}
    >
      <Grid
        item
        md={6}
        sm={12}
        className={classes.firstImage}
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      <Grid item md={6} className={classes.secondImage}>
        <GridList cellHeight={152} cols={2} className={classes.gridList}>
          {images.map((image, imageIndex) => (
            <GridListTile key={imageIndex}>
              <img src={image.link} alt={description} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
};
