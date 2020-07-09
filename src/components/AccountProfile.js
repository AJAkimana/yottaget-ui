import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { toAccess } from '../helpers';

const useStyles = makeStyles((theme) => ({
  root: {},
  details: {
    display: 'flex',
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  uploadButton: {
    marginRight: theme.spacing(2),
  },
}));

export const AccountProfile = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const { user } = useSelector(({ session }) => session);
  user.timezone = 'Kigali';

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant='h2'>
              {user.names}
            </Typography>
            <Typography
              className={classes.locationText}
              color='textSecondary'
              variant='body1'
            >
              {toAccess(user.a_level)}
            </Typography>
            <Typography
              className={classes.dateText}
              color='textSecondary'
              variant='body1'
            >
              {moment().format('hh:mm A')} ({user.timezone})
            </Typography>
          </div>
          <Avatar className={classes.avatar} src={user.avatar} />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button className={classes.uploadButton} color='primary' variant='text'>
          Upload picture
        </Button>
        <Button variant='text'>Remove picture</Button>
      </CardActions>
    </Card>
  );
};
