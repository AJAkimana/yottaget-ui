import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import Cookies from 'js-cookie';
import { BtnSaver } from './commons';
import { getSessionUser } from '../helpers/sessionUtils';
import { useSelector } from 'react-redux';
import { logoutUser, updateUser } from '../redux/actions';

export const AccountDetails = (props) => {
  // const { user: theUser } = useSelector(({ session }) => session);
  const theUser = getSessionUser();
  const [user, setUser] = useState(theUser);
  const {
    userUpdate: { loading, loaded },
    userOut: { loaded: hasLoggedOut },
  } = useSelector(({ userUpdate, userOut }) => ({ userUpdate, userOut }));
  useEffect(() => {
    if (loaded) {
      logoutUser();
    }
  }, [loaded]);
  useEffect(() => {
    if (hasLoggedOut) {
      // sessionService.deleteSession();
      // sessionService.deleteUser();
      Cookies.remove('PHPSESSIONID');
      Cookies.remove('USER_DATA');
      window.location.replace('/');
    }
  }, [hasLoggedOut]);
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = () => {
    user.isPassword = false;
    delete user.id;
    delete user.prev_passwords;
    delete user.createdAt;
    delete user.a_level;
    updateUser(user);
  };
  return (
    <Card>
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
          <BtnSaver
            loading={loading}
            success={loaded}
            message='Update profile'
            onSave={() => handleSubmit()}
          />
        </CardActions>
      </form>
    </Card>
  );
};
