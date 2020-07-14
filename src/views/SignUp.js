import React, { useState, useEffect, useContext } from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LockOutlined } from '@material-ui/icons';
import { useStyles } from '../utils/customStyles';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from '../redux/actions';
import { SessionContext } from '../components/utils';

const userTypes = [
  { lavel: 2, name: 'Landloard' },
  { lavel: 3, name: 'Tenant' },
];
const info = {
  username: '',
  password: '',
  phone: '',
  email: '',
  confirmPassword: '',
  names: '',
  a_level: 3,
};
export const SignUp = ({ location }) => {
  const classes = useStyles();
  const [user, setUser] = useState(info);
  const { registering, registered, userInfo } = useSelector(
    ({ register, session }) => register
  );
  const session = useContext(SessionContext);
  useEffect(() => {
    if (session) {
      window.history.back();
    }
  }, [session]);
  useEffect(() => {
    if (registered) {
      setUser(info);
      toast(`Thanks ${userInfo.names} for registering, Go to login`);
      setTimeout(() => {
        window.location.replace('/signin');
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registered, userInfo]);
  const onInputChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };
  const onRegister = () => {
    if (user.password !== user.confirmPassword) {
      toast('Password do not match', { type: toast.TYPE.ERROR });
      return;
    }
    registerUser(user);
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
                name='a_level'
                label='User type'
                id='a_level'
                select
                value={user.a_level}
                onChange={onInputChange}
              >
                {userTypes.map((type, typeIndex) => (
                  <MenuItem key={typeIndex} value={type.lavel}>
                    {type.name}
                  </MenuItem>
                ))}
              </TextField>
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
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={registering || registered}
            onClick={() => onRegister()}
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
