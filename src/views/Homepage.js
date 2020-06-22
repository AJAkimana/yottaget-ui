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
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

const houseUrl = `${process.env.PUBLIC_URL}/imgs/house-demo.png`;
export const Homepage = () => {
  const classes = useStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <>
      <Grid className={classes.mainImageHome}>
        <Typography>Yottaget</Typography>
      </Grid>
      {/* <img src={bgImage} alt='Yottaget' />
      </Grid> */}
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
        <Grid container spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item md={4} sm={12}>
              <Card className={shadowStyles.root} elevation={3}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={houseUrl}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h4' component='h2'>
                      With water and electricity
                    </Typography>
                    <Typography variant='h4' color='primary'>
                      30000 RwF / Month
                    </Typography>
                    <Typography variant='h6'>Gitega</Typography>
                    <Grid container alignItems='center' spacing={4}>
                      <Grid item>
                        <Typography variant='caption'>Water</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='caption'>Electricity</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='caption'>Hospital</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='caption'>Market</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Rent a house
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.moreContainer}>
          <Grid item>
            <Button variant='contained' color='primary'>
              View more houses
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
