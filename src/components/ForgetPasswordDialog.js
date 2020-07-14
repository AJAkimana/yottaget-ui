import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from 'react-redux';
import { BtnSaver } from './commons';
import { toast } from 'react-toastify';
import { foregetPassword } from '../redux/actions';

const info = {
  phone: '',
  password: '',
  confirmPassword: '',
};
export const ForgetPasswordDialog = ({ isOpen, setIsOpen }) => {
  const [userInfo, setUserInfo] = useState(info);
  const { loading, loaded, message: serverMessage } = useSelector(
    ({ forgetPass }) => forgetPass
  );
  useEffect(() => {
    if (loaded) {
      setUserInfo(info);
      toast(serverMessage);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  const onChangeInput = ({ target: { name, value } }) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      aria-labelledby='add-house-dialog'
    >
      <DialogTitle id='add-house-dialog'>
        Forget you password: Please type phone number and a new password
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label='Type your phone number'
          name='phone'
          onChange={onChangeInput}
          type='phone'
          value={userInfo.phone}
          variant='outlined'
        />
        <TextField
          fullWidth
          label='New password'
          name='password'
          onChange={onChangeInput}
          type='password'
          style={{ marginTop: '1rem' }}
          value={userInfo.password}
          variant='outlined'
        />
        <TextField
          fullWidth
          label='Confirm password'
          name='confirmPassword'
          onChange={onChangeInput}
          style={{ marginTop: '1rem' }}
          type='password'
          value={userInfo.confirmPassword}
          variant='outlined'
        />
      </DialogContent>
      <DialogActions>
        <BtnSaver
          loading={loading}
          success={loaded}
          message={loading ? 'Loading,...' : 'Change password'}
          onSave={() => foregetPassword(userInfo)}
        />
        <Button onClick={setIsOpen} color='secondary'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
