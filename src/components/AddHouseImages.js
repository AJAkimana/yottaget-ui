import React, { useState, useEffect } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import {
  Button,
  GridList,
  GridListTile,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { uploadPhotos } from '../utils/helpers';
import { addHouseImages } from '../redux/actions';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
  },
}));

export const AddHouseImages = ({ open, setOpen, house }) => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [imageUploading, setImageUploading] = useState(false);
  const [hasUploaded, setHasUploaded] = useState(false);
  const [imagesUrl, setImagesUrl] = useState({ images: [] });

  const classes = useStyles();

  const { loading, loaded, message } = useSelector(
    ({ houseImagesAdd }) => houseImagesAdd
  );
  useEffect(() => {
    if (loaded) {
      setHasUploaded(false);
      setImages([]);
      setImagesUrl({ images: [] });
      setOpen();
      toast(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  const saveImage = (files) => {
    setImages(files);
    setIsUploadOpen(false);
  };
  const onSaveImages = async () => {
    if (!hasUploaded) {
      setImageUploading(true);
      const { uploaded, urls } = await uploadPhotos(images, hasUploaded);
      if (uploaded) {
        setImageUploading(false);
        setHasUploaded(true);
        imagesUrl.images = urls;
      }
    }
    addHouseImages(house.id, imagesUrl);
  };
  const tiles = images.map((image) => URL.createObjectURL(image));
  return (
    <Dialog open={open} onClose={setOpen} aria-labelledby='add-images-dialog'>
      <DialogTitle id='add-images-dialog'>
        Add images to this house: {house.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You need to select exactly 4 images
        </DialogContentText>
        <Button onClick={() => setIsUploadOpen(true)}>
          Add the house images(4 photos)
        </Button>
        <DropzoneDialog
          open={isUploadOpen}
          onSave={saveImage}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          filesLimit={4}
          maxFileSize={5000000}
          onClose={() => setIsUploadOpen(false)}
        />
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={4}>
            {tiles.map((tile, tileIndex) => (
              <GridListTile key={tileIndex} cols={1}>
                <img src={tile} alt={`Tile n ${tileIndex}`} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={setOpen} color='primary'>
          Cancel
        </Button>
        <Button
          color='primary'
          disabled={images.length !== 4 || imageUploading || loading}
          onClick={async () => await onSaveImages()}
        >
          {imageUploading
            ? 'Uploading images'
            : loading
            ? 'Saving images'
            : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
