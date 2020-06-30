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
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { useStyles } from '../../utils/customStyles';
import { Link } from 'react-router-dom';

export const House = ({ houseUrl, name, utilities, price, location, slug }) => {
  const shadowStyles = useBouncyShadowStyles();
  const classes = useStyles();
  return (
    <Card className={shadowStyles.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={houseUrl}
          title='House cover'
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='h2'>
            {name}
          </Typography>
          <Typography variant='h4' color='primary'>
            {price} RwF / Month
          </Typography>
          <Typography variant='h6'>{location}</Typography>
          <Grid container alignItems='center' spacing={4}>
            {utilities.map((utility, utilityIndex) => (
              <Grid item key={utilityIndex}>
                <Typography variant='caption'>{utility.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/houses/${slug}`}
          size='small'
          color='primary'
        >
          Rent a house
        </Button>
        <Button
          component={Link}
          to={`/houses/${slug}`}
          size='small'
          color='primary'
        >
          View details
        </Button>
      </CardActions>
    </Card>
  );
};
