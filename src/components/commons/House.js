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

export const House = ({ houseUrl, name, utilities, price, location }) => {
  const shadowStyles = useBouncyShadowStyles();
  const classes = useStyles();
  return (
    <Card className={shadowStyles.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={houseUrl}
          title='Contemplative Reptile'
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
                <Typography variant='caption'>{utility}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' href={`/houses/${location}`}>
          Rent a house
        </Button>
      </CardActions>
    </Card>
  );
};
