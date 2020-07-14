import React, { useEffect } from 'react';
import { CardCount } from './commons';
import { Grid } from '@material-ui/core';
import {
  PeopleOutlined,
  HouseOutlined,
  EuroOutlined,
} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { getDashboardCount } from '../redux/actions';
import { Skeleton } from '@material-ui/lab';

const icons = {
  user: <PeopleOutlined />,
  house: <HouseOutlined />,
  money: <EuroOutlined />,
};
export const DashboardCounts = () => {
  const { loading, counts } = useSelector(({ userDash }) => userDash);
  useEffect(() => {
    getDashboardCount();
  }, []);
  const notNullCounts = counts.filter((el) => el.count !== null);
  return loading ? (
    <Grid item lg={3} sm={6} xl={3} xs={12}>
      <Skeleton variant='rect' height={118} />
    </Grid>
  ) : (
    notNullCounts.map((item, itemIndex) => (
      <Grid item lg={3} sm={6} xl={3} xs={12} key={itemIndex}>
        <CardCount
          label={item.label}
          count={item.count}
          icon={icons[item.type]}
        />
      </Grid>
    ))
  );
};
