import React, { useEffect } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getUsers, getLocations } from '../../redux/actions';

export const BasicInfo = ({
  handleNext,
  handleChange,
  values: { description, userId, price, locationId },
  filedError,
  isError,
}) => {
  const isEmpty = locationId !== '' && userId !== '';
  const {
    usersGet: { users },
    locationsGet: { locations },
  } = useSelector(({ usersGet, locationsGet }) => ({ usersGet, locationsGet }));
  useEffect(() => {
    getLocations();
    getUsers('landload');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='House description'
            name='description'
            placeholder='Description'
            defaultValue={description}
            onChange={handleChange('description')}
            margin='normal'
            error={filedError.description !== ''}
            helperText={
              filedError.description !== '' ? `${filedError.description}` : ''
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Price'
            name='price'
            type='number'
            placeholder='Price'
            defaultValue={price}
            onChange={handleChange('price')}
            margin='normal'
            error={filedError.price !== ''}
            helperText={filedError.price !== '' ? `${filedError.price}` : ''}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin='normal'>
            <InputLabel htmlFor='userId'>House owner</InputLabel>
            <Select value={userId} onChange={handleChange('userId')}>
              {users.length ? (
                users.map((user, userIndex) => (
                  <MenuItem value={user.id} key={userIndex}>
                    {user.names}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value=''>---Select user--</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin='normal'>
            <InputLabel htmlFor='locationId'>Location</InputLabel>
            <Select value={locationId} onChange={handleChange('locationId')}>
              {locations.length ? (
                locations.map((location, locationIndex) => (
                  <MenuItem value={location.id} key={locationIndex}>
                    {location.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value=''>---Select location--</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div
        style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}
      >
        <Button
          variant='contained'
          disabled={!isEmpty || isError}
          color='primary'
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </>
  );
};
