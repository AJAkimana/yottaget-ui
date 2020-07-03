import React from 'react';
import { CardCount } from './commons';
import { Grid } from '@material-ui/core';
import {
  PeopleOutlined,
  HouseOutlined,
  EuroOutlined,
} from '@material-ui/icons';

const counts = [
  { label: 'Users', count: 20, icon: <PeopleOutlined /> },
  { label: 'Houses', count: 456, icon: <HouseOutlined /> },
  { label: 'Tenants', count: 80, icon: <PeopleOutlined /> },
  { label: 'Amount paid', count: 20, icon: <EuroOutlined /> },
];
export const DashboardCounts = () =>
  counts.map((item, itemIndex) => (
    <Grid item lg={3} sm={6} xl={3} xs={12} key={itemIndex}>
      <CardCount label={item.label} count={item.count} icon={item.icon} />
    </Grid>
  ));
