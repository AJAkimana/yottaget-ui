import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  TextField,
} from '@material-ui/core';
import Cookies from 'js-cookie';
import { BtnSaver } from './commons/BtnSaver';
import { useSelector } from 'react-redux';
import { logoutUser, updateUser } from '../redux/actions';
import { toast } from 'react-toastify';

export const ChangePassword = () => {
  const [values, setValues] = useState({
    current: '',
    password: '',
    confirm: '',
  });
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
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    const { confirm, password } = values;
    if (confirm !== password) {
      toast('Sorry confirm the new password');
      return;
    }
    delete values.confirm;
    values.isPassword = true;
    updateUser(values);
  };
  return (
    <Card>
      <form>
        <CardHeader subheader='Update password' title='Password' />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label='Current password'
            name='current'
            onChange={handleChange}
            type='password'
            value={values.current}
            variant='outlined'
          />
          <TextField
            fullWidth
            label='New password'
            name='password'
            onChange={handleChange}
            type='password'
            style={{ marginTop: '1rem' }}
            value={values.password}
            variant='outlined'
          />
          <TextField
            fullWidth
            label='Confirm password'
            name='confirm'
            onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type='password'
            value={values.confirm}
            variant='outlined'
          />
        </CardContent>
        <Divider />
        <CardActions>
          <BtnSaver
            loading={loading}
            success={loaded}
            message='Change password'
            onSave={() => handleSubmit()}
          />
        </CardActions>
      </form>
    </Card>
  );
};
