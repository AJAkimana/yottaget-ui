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
import { Link } from 'react-router-dom';
import { LockOutlined } from '@material-ui/icons';
import queryString from 'query-string';
import { useSelector } from 'react-redux';
import { useStyles } from '../utils/customStyles';
import { loginUser } from '../redux/actions';
import { toast } from 'react-toastify';
import { sessionService } from 'redux-react-session';

export const SignIn = ({ location, history }) => {
  const { redirectUrl } = queryString.parse(location.search);
  const classes = useStyles();
  const [user, setUser] = useState({ phone: '', password: '' });
  const { auth, session } = useSelector(({ auth, session }) => ({
    auth,
    session,
  }));
  const { loggedIn, loggingIn, userInfo } = auth;
  const { authenticated } = session;
  const onInputChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  useEffect(() => {
    if (authenticated) {
      history.length ? history.goBack() : history.replace(redirectUrl || '/');
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
        history.replace(redirectUrl || '/');
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, userInfo]);
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.authPaper}>
        <Avatar className={classes.authAvatar}>
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='phone'
            label='Enter your phone number'
            name='phone'
            autoComplete='phone'
            value={user.phone}
            onChange={onInputChange}
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
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
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={loggingIn}
            onClick={() => loginUser(user)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/signup' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
