import React from 'react';
import {
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  makeStyles,
} from '@material-ui/core';
import { Page } from '../components';
import { Link } from 'react-router-dom';

const notFoundImage = `${process.env.PUBLIC_URL}/imgs/not-found.svg`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: '1vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  imageContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto',
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
}));
export const NotFound = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Page className={classes.root} title='Error 404'>
      <Typography align='center' variant={mobileDevice ? 'h5' : 'h3'}>
        404: The page you are looking for isn’t here
      </Typography>
      <Typography align='center' variant='subtitle2'>
        You either tried some shady route or you came here by mistake. Whichever
        it is, try using the navigation
      </Typography>
      <div className={classes.imageContainer}>
        <img
          alt='Under development'
          className={classes.image}
          src={notFoundImage}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button color='primary' component={Link} to='/' variant='outlined'>
          Back to home
        </Button>
      </div>
    </Page>
  );
};
