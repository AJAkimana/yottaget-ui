import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getHouses } from '../redux/actions';
import { AddHouseImages } from './AddHouseImages';
import { Skeleton, Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: 'flex-end',
  },
}));

export const HousesTable = () => {
  const classes = useStyles();
  const {
    housesGet: { loading, houses },
    houseAdd: { loaded },
    houseImagesAdd: { loaded: imagesAdded },
  } = useSelector(({ housesGet, houseAdd, houseImagesAdd }) => ({
    housesGet,
    houseAdd,
    houseImagesAdd,
  }));
  const [selectedHouses, setSelectedHouses] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [openAddImages, setOpenAddImages] = useState(false);
  const [currentHouse, setCurrentHouse] = useState({});
  useEffect(() => {
    getHouses(page + 1, rowsPerPage, null, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, loaded, imagesAdded]);
  const handleSelectAll = (event) => {
    let selectedHouses = [];

    if (event.target.checked) {
      selectedHouses = houses.map((house) => house.id);
    }
    setSelectedHouses(selectedHouses);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedHouses.indexOf(id);
    let newSelectedHouses = [];

    if (selectedIndex === -1) {
      newSelectedHouses = newSelectedHouses.concat(selectedHouses, id);
    } else if (selectedIndex === 0) {
      newSelectedHouses = newSelectedHouses.concat(selectedHouses.slice(1));
    } else if (selectedIndex === selectedHouses.length - 1) {
      newSelectedHouses = newSelectedHouses.concat(selectedHouses.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedHouses = newSelectedHouses.concat(
        selectedHouses.slice(0, selectedIndex),
        selectedHouses.slice(selectedIndex + 1)
      );
    }

    setSelectedHouses(newSelectedHouses);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <AddHouseImages
        open={openAddImages}
        setOpen={() => setOpenAddImages(false)}
        house={currentHouse}
      />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <Alert severity='error'>
            A house with no images will not appear on the platiform — check it
            out!
          </Alert>
          <div className={classes.inner}>
            {loading || !houses.length ? (
              <div className={classes.root}>
                <Skeleton animation='wave' />
                <Skeleton animation='wave' />
                <Skeleton animation='wave' />
              </div>
            ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={selectedHouses.length === houses.length}
                        color='primary'
                        indeterminate={
                          selectedHouses.length > 0 &&
                          selectedHouses.length < houses.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Registration date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {houses.map((house) => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={house.id}
                      selected={selectedHouses.indexOf(house.id) !== -1}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox
                          checked={selectedHouses.indexOf(house.id) !== -1}
                          color='primary'
                          onChange={(event) => handleSelectOne(event, house.id)}
                          value='true'
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant='body1'>
                          {house.description}
                        </Typography>
                      </TableCell>
                      <TableCell>{house.price}</TableCell>
                      <TableCell>{house.landlord.names}</TableCell>
                      <TableCell>{house.landlord.phone}</TableCell>
                      <TableCell>
                        {moment(house.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        <ButtonGroup
                          color='primary'
                          size='small'
                          aria-label='outlined primary button group'
                        >
                          {!house.images.length && (
                            <Button
                              onClick={() => {
                                setCurrentHouse(house);
                                setOpenAddImages(true);
                              }}
                            >
                              Add images
                            </Button>
                          )}
                          {/* <Button>Two</Button>
                          <Button>Three</Button> */}
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component='div'
          count={houses.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[3, 5, 10]}
        />
      </CardActions>
    </Card>
  );
};
