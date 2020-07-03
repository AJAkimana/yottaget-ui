import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  TextField,
} from '@material-ui/core';
import { useStyles } from '../utils/customStyles';
import { useSelector } from 'react-redux';
import { searchHouses } from '../redux/actions';

export const SearchHouse = ({ open, setOpen }) => {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState('');
  const { loading, loaded, results } = useSelector(({ search }) => search);
  useEffect(() => {
    if (searchKey) {
      searchHouses(searchKey);
    }
  }, [searchKey]);
  return (
    <Dialog
      open={open}
      onClose={setOpen}
      fullWidth
      scroll='paper'
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
    >
      <DialogTitle id='scroll-dialog-title'>
        Search houses and locations
      </DialogTitle>
      <DialogContent dividers>
        <TextField
          autoFocus
          margin='dense'
          id='searchKey'
          label='Search'
          type='text'
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          fullWidth
        />
        {loading ? (
          <Typography>Loading,... Please wait</Typography>
        ) : loaded ? (
          <>
            <Typography component='h4'>Houses</Typography>
            <List className={classes.searchListRoot}>
              {results.houses.length ? (
                results.houses.map((house, houseIndex) => (
                  <ListItem button alignItems='flex-start' key={houseIndex}>
                    <ListItemAvatar>
                      <Avatar alt='House' src='/static/images/avatar/1.jpg' />
                    </ListItemAvatar>
                    <ListItemText
                      primary={house.name}
                      secondary={
                        <>
                          <Typography
                            component='span'
                            variant='body2'
                            className={classes.inline}
                            color='textPrimary'
                          >
                            {house.location.name}
                          </Typography>
                          {` — ${house.description}`}
                        </>
                      }
                    />
                  </ListItem>
                ))
              ) : (
                <Typography align='center'>
                  No house matches the <b>{searchKey}</b>
                </Typography>
              )}
              <Divider />
              {results.locations.length ? (
                <>
                  <Typography component='h4'>Locations</Typography>
                  {results.locations.map((location, locationIndex) => (
                    <ListItem button key={locationIndex}>
                      <ListItemText primary={location.name} />
                    </ListItem>
                  ))}
                </>
              ) : null}
            </List>
          </>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={setOpen} color='primary'>
          Close search
        </Button>
      </DialogActions>
    </Dialog>
  );
};
