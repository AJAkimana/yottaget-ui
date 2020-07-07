import React, { useEffect } from 'react';
import { Button, Grid, Typography, Divider } from '@material-ui/core';
import { useStyles } from '../utils/customStyles';
import { useSelector } from 'react-redux';
import { getHouseDetails } from '../redux/actions';
import { Skeleton } from '@material-ui/lab';
import { Page, HouseImages } from '../components';

export const HouseDetails = ({ match }) => {
  const classes = useStyles();
  const { oneHouse } = useSelector(({ oneHouse }) => ({ oneHouse }));
  const { houseSlug } = match.params;
  useEffect(() => {
    getHouseDetails(houseSlug);
  }, [houseSlug]);
  const { house } = oneHouse;
  return (
    <Page title={house.description}>
      <Grid className={classes.imageContainer}>
        {oneHouse.loading ? (
          <>
            <Typography>
              <Skeleton width='20%' />
            </Typography>
            <Typography variant='h2' gutterBottom>
              <Skeleton width='30%' />
            </Typography>
            <Skeleton variant='rect' height={345} />
          </>
        ) : (
          <>
            <Typography>House for rent</Typography>
            <Typography variant='h2' gutterBottom>
              {house.description}
            </Typography>
            <HouseImages
              coverImage={house.coverImage}
              images={house.images}
              description={house.description}
            />
            <Grid container spacing={2} className={classes.description}>
              <Grid item md={8} xs={12}>
                <Typography variant='h3' gutterBottom>
                  Owner: Akimana JA
                </Typography>
                <Typography variant='h4' gutterBottom>
                  Phone number: 07834543016
                </Typography>
                <Divider />
                {/* <Typography variant='h4' gutterBottom>
                Full description
              </Typography>
              <Typography>{house.description}</Typography> */}
              </Grid>
              <Grid item md={4} sm={12}>
                <Typography variant='h4' gutterBottom>
                  {`${house.price} Rwf/month`}
                </Typography>
                <Grid container alignItems='center' spacing={4}>
                  {house.utilities.map((utility, utilityIndex) => (
                    <Grid item key={utilityIndex}>
                      <Typography variant='caption'>{utility.name}</Typography>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  variant='contained'
                  size='small'
                  color='primary'
                  className={classes.buttons}
                >
                  Rent a house
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Page>
  );
};
