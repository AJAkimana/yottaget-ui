import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  TextField,
} from '@material-ui/core';
import { BtnSaver } from './commons/BtnSaver';
import { useSelector } from 'react-redux';
import { logoutUser, updateUser } from '../redux/actions';
import { toast } from 'react-toastify';

const useStyles = makeStyles(() => ({
  root: {},
}));

export const ChangePassword = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    current: '',
    password: '',
    confirm: '',
  });
  const { loading, loaded } = useSelector(({ userUpdate }) => userUpdate);
  useEffect(() => {
    if (loaded) {
      logoutUser();
    }
  }, [loaded]);
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
    <Card {...rest} className={clsx(classes.root, className)}>
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
