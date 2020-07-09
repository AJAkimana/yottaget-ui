import React, { useState } from 'react';
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
import { uploadPhotos, findObject, truncate } from '../../utils/helpers';
import { createHouse } from '../../redux/actions';

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
  const [isUploaded, setIsUploaded] = useState(false);
  const {
    usersGet: { users },
    locationsGet: { locations },
  } = useSelector(({ usersGet, locationsGet }) => ({ usersGet, locationsGet }));
  images.map((image) => imagesUrls.push({ link: URL.createObjectURL(image) }));

  const saveHouseInfo = async () => {
    if (!isUploaded) {
      setImageUploading(true);
      const uploads = await uploadPhotos(coverImage, images, isUploaded);
      if (uploads.uploaded) {
        setImageUploading(false);
        setIsUploaded(true);
        setImagesUrl(uploads.urls);
        setCoverImageUrl(uploads.coverImage);
      }
    }
    values.name = truncate(values.description, 40);
    values.coverImage = coverImageUrl;
    values.images = imagesUrl;
    console.log('Values to send', values);
    createHouse(values);
  };
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
              secondary={findObject(locations, 'id', values.locationId).name}
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
              secondary={findObject(users, 'id', values.userId).names}
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
              : isUploaded
              ? 'Handle backend'
              : 'Confirm'}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
