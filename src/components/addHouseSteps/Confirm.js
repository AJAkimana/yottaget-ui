import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Grid,
} from '@material-ui/core';
import { HouseImages } from '../HouseImages';

export const Confirm = ({
  handleNext,
  handleBack,
  values: { description, locationId, userId, price },
  images,
  coverImage,
}) => {
  let imagesUrls = [];
  images.map((image) => imagesUrls.push({ link: URL.createObjectURL(image) }));
  console.log('Akiam', imagesUrls);
  return (
    <Grid container>
      <Grid item md={3} xs={12}>
        <List disablePadding>
          <ListItem>
            <ListItemText primary='Description' secondary={description} />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText primary='Location' secondary={locationId} />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText primary='Price' secondary={price} />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText primary='House owner' secondary={userId} />
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
            onClick={handleNext}
          >
            Confirm & Continue
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
