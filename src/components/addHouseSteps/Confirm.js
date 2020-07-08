import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Grid,
} from '@material-ui/core';
import { HouseImages } from '../HouseImages';
import { useSelector } from 'react-redux';
import { cloudinaryHttp } from '../../redux/utils/http';
import { toast } from 'react-toastify';

export const Confirm = ({
  handleNext,
  handleBack,
  values,
  images,
  coverImage,
}) => {
  let imagesUrls = [];
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [imagesUrl, setImagesUrl] = useState([]);
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const {
    usersGet: { users },
    locationsGet: { locations },
  } = useSelector(({ usersGet, locationsGet }) => ({ usersGet, locationsGet }));
  images.map((image) => imagesUrls.push({ link: URL.createObjectURL(image) }));
  const selectedUser = users.find(({ id }) => id === values.userId);
  const selectedLocation = locations.find(({ id }) => id === values.locationId);
  const getImageFileData = (imageFile) => {
    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', 'nyxdcave');
    return data;
  };
  const uploadPhotos = async () => {
    setImageUploading(true);
    let coverImageData = getImageFileData(coverImage);
    const coverImageRes = await cloudinaryHttp.post('/', coverImageData);
    if (coverImageRes.status === 200) {
      setCoverImageUrl(coverImageRes.data.secure_url);
    }
    const urls = await Promise.all(
      await images.map(async (image) => {
        const imageData = getImageFileData(image);
        const imagesRes = await cloudinaryHttp.post('/', imageData);
        if (imagesRes.status === 200) {
          return imagesRes.data.secure_url;
        }
      })
    );
    if (urls.length === images.length) {
      setImagesUrl(urls);
      setImageUploading(false);
      setImageUploaded(true);
    }
  };

  const saveHouseInfo = async () => {
    if (!imageUploaded) {
      await uploadPhotos();
    } else if (imageUploaded) {
      values.coverImage = coverImageUrl;
      values.images = imagesUrl;
      console.log('Body to send', values);
    } else {
      toast('Sorry, no images');
    }
  };
  console.log('Cover Image info', coverImageUrl);
  console.log('Images info', imagesUrl);
  return (
    <Grid container>
      <Grid item md={3} xs={12}>
        <List disablePadding>
          <ListItem>
            <ListItemText
              primary='Description'
              secondary={values.description}
            />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText
              primary='Location'
              secondary={selectedLocation.name}
            />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText primary='Price' secondary={values.price} />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText
              primary='House owner'
              secondary={selectedUser.names}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item md={9} xs={12}>
        <HouseImages
          coverImage={URL.createObjectURL(coverImage)}
          images={imagesUrls}
        />
      </Grid>
      <Grid item md={12}>
        <div
          style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}
        >
          <Button variant='contained' color='default' onClick={handleBack}>
            Back
          </Button>
          <Button
            style={{ marginLeft: 20 }}
            variant='contained'
            color='secondary'
            disabled={imageUploading}
            onClick={async () => {
              await saveHouseInfo();
            }}
          >
            {imageUploading
              ? 'Uploading images, please wait'
              : imageUploaded
              ? 'Handle backend'
              : 'Confirm'}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
