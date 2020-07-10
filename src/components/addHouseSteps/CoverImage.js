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
export const CoverImage = ({
  handleBack,
  handleNext,
  coverImage,
  setCoverImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const saveImage = (images) => {
    setIsOpen(false);
    setCoverImage(images[0]);
  };
  const coverSrc = coverImage ? URL.createObjectURL(coverImage) : '';
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add cover image</Button>
      <DropzoneDialog
        open={isOpen}
        onSave={saveImage}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        showPreviews={true}
        filesLimit={1}
        maxFileSize={5000000}
        onClose={() => setIsOpen(false)}
      />
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          <GridListTile cols={1}>
            <img src={coverSrc} alt={`No house cover selected`} />
          </GridListTile>
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
          disabled={!coverImage}
        >
          Next
        </Button>
      </div>
    </>
  );
};
