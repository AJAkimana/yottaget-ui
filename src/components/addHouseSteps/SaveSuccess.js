import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

export const SaveSuccess = () => {
  return (
    <Fragment>
      <Typography variant='h2' align='center'>
        Success!
      </Typography>
      <Typography component='p' align='center' style={{ marginTop: 40 }}>
        The house information has successfully saved
      </Typography>
    </Fragment>
  );
};
