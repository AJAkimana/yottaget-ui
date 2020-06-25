import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { LockOutlined } from '@material-ui/icons';
import { useStyles } from '../utils/customStyles';
import { useSelector } from 'react-redux';
import { sessionService } from 'redux-react-session';
import { toast } from 'react-toastify';

export const SignUp = ({ location, history }) => {
  const { redirectUrl } = queryString.parse(location.search);
  const classes = useStyles();
  const [user, setUser] = useState({
    username: '',
    password: '',
    phone: '',
    email: '',
    confirmPassword: '',
    names: '',
  });
  const { auth, session } = useSelector(({ auth, session }) => ({
    auth,
    session,
  }));
  const { loggedIn, userInfo } = auth;
  const { authenticated } = session;
  useEffect(() => {
    if (authenticated) {
      history.length ? history.goBack() : location.replace(redirectUrl || '/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, redirectUrl]);
  useEffect(() => {
    if (loggedIn) {
      sessionService.saveSession({ token: userInfo.token });
      delete userInfo.token;
      sessionService.saveUser(userInfo);
      toast(`Welcome ${userInfo.names}`);
      setTimeout(() => {
        location.replace(redirectUrl || '/');
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, userInfo]);
  const onInputChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.authPaper}>
        <Avatar className={classes.authAvatar}>
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='names'
                name='names'
                variant='outlined'
                required
                fullWidth
                id='names'
                label='Full name'
                value={user.names}
                onChange={onInputChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
                value={user.username}
                onChange={onInputChange}
                autoComplete='username'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='phone'
                label='Phone number'
                name='phone'
                value={user.phone}
                onChange={onInputChange}
                autoComplete='phone'
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='email'
                label='Email address'
                name='email'
                value={user.email}
                onChange={onInputChange}
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={user.password}
                onChange={onInputChange}
                autoComplete='current-password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='confirmPassword'
                label='Confirm password'
                type='password'
                value={user.confirmPassword}
                onChange={onInputChange}
                id='confirmPassword'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Typography variant='body2'>
                <Link to='/signin'>Already have an account? Sign in</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
