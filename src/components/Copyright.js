import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='#' href='https://yottaget.com/'>
        Yottaget
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
