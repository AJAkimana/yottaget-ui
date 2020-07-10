import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
}));

export const CardCount = (props) => {
  const { label, count, icon } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify='space-between'>
          <Grid item>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              variant='body2'
            >
              {label}
            </Typography>
            <Typography variant='h3'>{count}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>{icon}</Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
