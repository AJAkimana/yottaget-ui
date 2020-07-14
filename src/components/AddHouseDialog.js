import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogContentText,
} from '@material-ui/core';
import {
  getLocations,
  getUsers,
  createHouse,
  getUtilities,
} from '../redux/actions';
import { useSelector } from 'react-redux';
import { BtnSaver } from './commons';
import { Autocomplete } from '@material-ui/lab';
import {
  houseDescriptions,
  uploadCoverImage,
  truncate,
} from '../utils/helpers';
import { DropzoneDialog } from 'material-ui-dropzone';
import { getSessionUser } from '../helpers/sessionUtils';

const houseInfo = {
  name: '',
  price: '',
  description: '',
  coverImage: '',
  locationId: '',
  userId: '',
  utilities: [],
};
export const AddHouseDialog = ({ isOpen, setIsOpen }) => {
  const [house, setHouse] = useState(houseInfo);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [hasUploaded, setHasUploaded] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [file, setFile] = useState('');
  const {
    usersGet: { users },
    locationsGet: { locations },
    houseAdd: { loading, loaded },
    utilityGet: { utilities },
  } = useSelector(({ usersGet, locationsGet, houseAdd, utilityGet }) => ({
    usersGet,
    locationsGet,
    houseAdd,
    utilityGet,
  }));
  const authUser = getSessionUser();
  const isAdmin = parseInt(authUser.a_level) === 1;
  useEffect(() => {
    getLocations();
    if (isAdmin) {
      getUsers('landload');
    } else {
      setHouse({ ...house, userId: authUser.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (house.locationId) {
      getUtilities(house.locationId);
    }
  }, [house.locationId]);
  useEffect(() => {
    if (loaded) {
      setHouse(houseInfo);
      setFile('');
      setIsOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  const onChangeInput = ({ target: { name, value } }) => {
    setHouse({ ...house, [name]: value });
  };
  const changeDescription = (event, value) => {
    setHouse({ ...house, description: value.map((v) => v.type).join(' and ') });
  };
  const saveImage = (images) => {
    setIsUploadOpen(false);
    setFile(images[0]);
  };
  const onSaveHouse = async () => {
    if (!hasUploaded) {
      setImageUploading(true);
      const { uploaded, coverUrl } = await uploadCoverImage(file, hasUploaded);
      if (uploaded && coverUrl) {
        setImageUploading(false);
        setHasUploaded(true);
        // setHouse({ ...house, coverImage: coverUrl });
        house.coverImage = coverUrl;
      } else {
        setImageUploading(false);
      }
    }
    house.name = truncate(house.description, 40);
    createHouse(house);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      maxWidth='lg'
      aria-labelledby='add-house-dialog'
    >
      <DialogTitle id='add-house-dialog'>Add new house</DialogTitle>
      <DialogContentText>
        Type all information necessary for the house i.e: Price, description and
        the location
      </DialogContentText>
      <DialogContent>
        <Autocomplete
          multiple
          id='house-description'
          options={houseDescriptions}
          getOptionLabel={(option) => option.type}
          onChange={changeDescription}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='standard'
              label='House descriptions'
              placeholder='Description'
            />
          )}
        />
        <TextField
          margin='dense'
          name='price'
          label='Price'
          value={house.price}
          onChange={onChangeInput}
          fullWidth
        />
        <FormControl fullWidth margin='dense'>
          <InputLabel htmlFor='locationId'>Location</InputLabel>
          <Select
            value={house.locationId}
            name='locationId'
            onChange={onChangeInput}
          >
            <MenuItem value=''>---Select location--</MenuItem>
            {locations.map((location, locationIndex) => (
              <MenuItem value={location.id} key={locationIndex}>
                {location.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Autocomplete
          multiple
          id='house-utilities'
          options={utilities}
          getOptionLabel={(option) => option.name}
          onChange={(e, utilities) =>
            setHouse({ ...house, utilities: utilities.map((util) => util.id) })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant='standard'
              label='House utilitis'
              placeholder='Utilities'
            />
          )}
        />
        {isAdmin && (
          <FormControl fullWidth margin='danse'>
            <InputLabel htmlFor='userId'>House owner</InputLabel>
            <Select value={house.userId} name='userId' onChange={onChangeInput}>
              <MenuItem value=''>---Select user--</MenuItem>
              {users.map((user, userIndex) => (
                <MenuItem value={user.id} key={userIndex}>
                  {user.names}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <Button onClick={() => setIsUploadOpen(true)}>Add cover image</Button>
        <DropzoneDialog
          open={isUploadOpen}
          onSave={saveImage}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          filesLimit={1}
          maxFileSize={5000000}
          onClose={() => setIsUploadOpen(false)}
        />
      </DialogContent>
      <DialogActions>
        <BtnSaver
          loading={imageUploading || loading}
          success={hasUploaded || loaded}
          message={
            imageUploading
              ? 'Uploading image'
              : loading
              ? 'Saving house'
              : 'Save house'
          }
          onSave={async () => await onSaveHouse()}
        />
        <Button onClick={setIsOpen} color='secondary'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
