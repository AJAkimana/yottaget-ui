import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export const HousesLoading = ({ numberOfItems = 1 }) => {
  return Array.from(new Array(numberOfItems)).map((item, index) => (
    <Grid item md={4} sm={12} key={index}>
      <Box width={333} maxWidth={333} marginRight={2} my={5}>
        <Skeleton variant='rect' height={118} />
        <Box pt={0.5}>
          <Skeleton />
          <Skeleton width='60%' />
          <Skeleton width='70%' />
        </Box>
      </Box>
    </Grid>
  ));
};
