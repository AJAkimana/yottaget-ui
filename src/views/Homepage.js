import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
  CardMedia,
} from '@material-ui/core';
import { useStyles } from '../utils/customStyles';
import { Link } from 'react-router-dom';
import { HousesGrid } from '../components';

const houseUrl = `${process.env.PUBLIC_URL}/imgs/house-demo.png`;
export const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.mainImageHome}>
        <Typography>Yottaget</Typography>
      </Grid>
      <Grid className={classes.container}>
        <Grid
          container
          alignContent='center'
          className={classes.servicesContainer}
          spacing={2}
        >
          {[0, 1].map((value) => (
            <Grid key={value} item md={6} sm={12}>
              <Card elevation={3}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h4' component='h2'>
                      Our Services
                    </Typography>
                    <Typography variant='h6' color='textSecondary'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' variant='outlined' color='primary'>
                    GET A HOUSE NOW
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <HousesGrid page={1} pageSize={3} />
        <Grid container className={classes.moreContainer}>
          <Grid item>
            <Button
              variant='contained'
              component={Link}
              to='/houses'
              color='primary'
            >
              View more houses
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.servicesContainer} spacing={3}>
          <Grid item md={6} sm={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={houseUrl}
                  title='About us'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={6} sm={12}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h4' component='h2'>
                    About Us
                  </Typography>
                  <Typography variant='h6' color='textSecondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' variant='outlined' color='primary'>
                  Contact Us
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
