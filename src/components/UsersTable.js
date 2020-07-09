import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from '@material-ui/core';

import { toAccess } from '../helpers';
import { useSelector, shallowEqual } from 'react-redux';
import { getUsers } from '../redux/actions';

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

export const UsersTable = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const {
    addUser: { loaded },
    usersGet: { loading, users },
  } = useSelector(({ addUser, usersGet }) => ({ addUser, usersGet }));
  useEffect(() => {
    getUsers('all');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shallowEqual]);
  useEffect(() => {
    getUsers('all');
  }, [loaded]);
  const handleSelectAll = (event) => {
    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map((user) => user.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            {loading ? (
              <Typography>Loading please wait, ...</Typography>
            ) : users.length ? (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={selectedUsers.length === users.length}
                        color='primary'
                        indeterminate={
                          selectedUsers.length > 0 &&
                          selectedUsers.length < users.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Access level</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Registration date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.slice(0, rowsPerPage).map((user) => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={user.id}
                      selected={selectedUsers.indexOf(user.id) !== -1}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox
                          checked={selectedUsers.indexOf(user.id) !== -1}
                          color='primary'
                          onChange={(event) => handleSelectOne(event, user.id)}
                          value='true'
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameContainer}>
                          <Avatar
                            className={classes.avatar}
                            src={user.avatarUrl}
                          >
                            {user.names}
                          </Avatar>
                          <Typography variant='body1'>{user.names}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{toAccess(user.a_level)}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>
                        {moment(user.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <Typography>No data found</Typography>
            )}
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component='div'
          count={users.length}
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
