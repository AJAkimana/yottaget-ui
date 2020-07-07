import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { Button } from '@material-ui/core';

export const Images = ({ handleBack, handleNext, images, setImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const saveImage = (files) => {
    setImages(files);
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add the house images</Button>
      <DropzoneDialog
        open={isOpen}
        onSave={saveImage}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={() => setIsOpen(false)}
      />
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
        <Button variant='contained' color='primary' onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};
