import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { AddNewUser } from '../redux/actions';
import { useSelector } from 'react-redux';
import { BtnSaver } from './commons';

export const AddUserDialog = ({ isOpen, setIsOpen }) => {
  const [user, setUser] = useState({
    names: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    a_level: '',
  });
  const { loading, loaded } = useSelector(({ addUser }) => addUser);
  const onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  return (
    <Dialog open={isOpen} onClose={setIsOpen} aria-labelledby='add-user-dialog'>
      <DialogTitle id='add-user-dialog'>Add new user</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          name='names'
          label='Names'
          value={user.names}
          onChange={onChangeInput}
          fullWidth
        />
        <TextField
          margin='dense'
          name='username'
          label='Username'
          value={user.username}
          onChange={onChangeInput}
          fullWidth
        />
        <TextField
          margin='dense'
          name='phone'
          label='Phone number'
          type='phone'
          value={user.phone}
          onChange={onChangeInput}
          fullWidth
        />
        <FormControl fullWidth required margin='normal'>
          <InputLabel htmlFor='a_level'>Access level</InputLabel>
          <Select value={user.a_level} name='a_level' onChange={onChangeInput}>
            <MenuItem value=''>---Select access--</MenuItem>
            <MenuItem value='2'>Landload</MenuItem>
            <MenuItem value='3'>Tenant</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin='dense'
          name='email'
          label='Email Address'
          type='email'
          value={user.email}
          onChange={onChangeInput}
          fullWidth
        />
        <TextField
          margin='dense'
          name='password'
          label='User password'
          type='text'
          value={user.password}
          onChange={onChangeInput}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <BtnSaver
          loading={loading}
          success={loaded}
          message='Save user'
          onSave={() => AddNewUser(user)}
        />
        <Button onClick={setIsOpen} color='secondary'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
