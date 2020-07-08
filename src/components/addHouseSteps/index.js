import React, { useState } from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { BasicInfo } from './BasicInfo';
import { CoverImage } from './CoverImage';
import { Images } from './Images';
import { Confirm } from './Confirm';
import { SaveSuccess } from './SaveSuccess';

const labels = ['House information', 'Cover image', 'Images', 'Confirmation'];

export const AddHouseSteps = () => {
  const [steps, setSteps] = useState(0);
  const [fields, setFields] = useState({
    description: 'Some description n',
    userId: '',
    locationId: '',
    price: '35000',
  });
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState('');
  // Copy fields as they all have the same name
  const [filedError, setFieldError] = useState({
    ...fields,
  });

  const [isError, setIsError] = useState(false);

  // Proceed to next step
  const handleNext = () => setSteps(steps + 1);
  // Go back to prev step
  const handleBack = () => setSteps(steps - 1);
  const handleChange = (input) => ({ target: { value } }) => {
    setFields({
      ...fields,
      [input]: value,
    });
    const formErrors = { ...filedError };
    const lengthValidate = value.length > 0 && value.length < 3;
    switch (input) {
      case 'description':
        formErrors.description = lengthValidate
          ? 'Try to provide enough description'
          : '';
        break;
      case 'price':
        formErrors.price =
          Number(value) < 1000 ? 'The price is not sufficient' : '';
        break;
      default:
        break;
    }

    // set error hook
    Object.values(formErrors).forEach((error) =>
      error.length > 0 ? setIsError(true) : setIsError(false)
    );
    // set errors hook
    setFieldError({
      ...formErrors,
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <BasicInfo
            handleNext={handleNext}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        );
      case 1:
        return (
          <CoverImage
            handleBack={handleBack}
            handleNext={handleNext}
            coverImage={coverImage}
            setCoverImage={setCoverImage}
          />
        );

      case 2:
        return (
          <Images
            handleBack={handleBack}
            handleNext={handleNext}
            images={images}
            setImages={setImages}
          />
        );
      case 3:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={fields}
            coverImage={coverImage}
            images={images}
            setImages={setImages}
          />
        );
      default:
        break;
    }
  };

  // Handle components
  return (
    <>
      {steps === labels.length ? (
        <SaveSuccess />
      ) : (
        <>
          <Stepper
            activeStep={steps}
            style={{ paddingTop: 30, paddingBottom: 50 }}
            alternativeLabel
          >
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(steps)}
        </>
      )}
    </>
  );
};
