import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { Button, GridList, GridListTile, makeStyles } from '@material-ui/core';

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

export const Images = ({ handleBack, handleNext, images, setImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const saveImage = (files) => {
    setImages(files);
    setIsOpen(false);
  };
  const tiles = images.map((image) => URL.createObjectURL(image));
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Add the house images(4 photos)
      </Button>
      <DropzoneDialog
        open={isOpen}
        onSave={saveImage}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        showPreviews={true}
        filesLimit={4}
        maxFileSize={5000000}
        onClose={() => setIsOpen(false)}
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
      <div
        style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}
      >
        <Button
          variant='contained'
          color='default'
          onClick={handleBack}
          style={{ marginRight: 20 }}
        >
          Back
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleNext}
          disabled={images.length !== 4}
        >
          Next
        </Button>
      </div>
    </>
  );
};
