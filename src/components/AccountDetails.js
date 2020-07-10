import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import { BtnSaver } from './commons';
import { getSessionUser } from '../helpers/sessionUtils';

const useStyles = makeStyles(() => ({
  root: {},
}));

export const AccountDetails = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  // const { user: theUser } = useSelector(({ session }) => session);
  const theUser = getSessionUser();
  const [user, setUser] = useState(theUser);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete='off' noValidate>
        <CardHeader subheader='The information can be edited' title='Profile' />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText='Please specify your names'
                label='Names'
                margin='dense'
                name='names'
                onChange={handleChange}
                required
                value={user.names}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Username'
                margin='dense'
                name='username'
                onChange={handleChange}
                required
                value={user.username}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Email Address'
                margin='dense'
                name='email'
                onChange={handleChange}
                disabled
                value={user.email}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Phone Number'
                margin='dense'
                name='phone'
                onChange={handleChange}
                disabled
                value={user.phone}
                variant='outlined'
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <BtnSaver />
        </CardActions>
      </form>
    </Card>
  );
};
