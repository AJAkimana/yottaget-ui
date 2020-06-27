import React from 'react';
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Paper,
  Divider,
} from '@material-ui/core';
import { useStyles } from '../utils/customStyles';

const houseUrl = `${process.env.PUBLIC_URL}/imgs/house-demo.png`;
export const HouseDetails = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.imageContainer}>
      <Typography>House for rent</Typography>
      <Typography variant='h2' gutterBottom>
        House for rent with Swimming pool
      </Typography>
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
          style={{ backgroundImage: `url(${houseUrl})` }}
        ></Grid>
        <Grid item md={6} className={classes.secondImage}>
          <GridList cellHeight={152} cols={2} className={classes.gridList}>
            {[...Array(4).keys()].map((image, imageIndex) => (
              <GridListTile key={imageIndex}>
                <img src={houseUrl} alt={`House info num ${imageIndex + 1}`} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.description}>
        <Grid item md={8} sm={12}>
          <Typography variant='h3' gutterBottom>
            Owner: Akimana JA
          </Typography>
          <Divider />
          <Typography variant='h4' gutterBottom>
            Description
          </Typography>
          <Typography>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long.
          </Typography>
        </Grid>
        <Grid item md={4} sm={12}>
          <Typography variant='h4' gutterBottom>
            150,000 Rwf/month
          </Typography>
          <Grid container alignItems='center' spacing={4}>
            {['Water', 'Electricity', 'Hospital', 'Market'].map(
              (utility, utilityIndex) => (
                <Grid item key={utilityIndex}>
                  <Typography variant='caption'>{utility}</Typography>
                </Grid>
              )
            )}
          </Grid>
          <Button
            variant='contained'
            size='small'
            color='primary'
            href={`/houses/buggatto`}
            className={classes.buttons}
          >
            Rent a house
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
