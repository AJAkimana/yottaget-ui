import React from 'react';
import {
  Main,
  Homepage,
  MoreHouses,
  HouseDetails,
  SignIn,
  SignUp,
  NotFound,
  AdminMain,
  Dashboard,
  AdminUsers,
  AdminHouses,
  Account,
  Settings,
} from './views';
import { Redirect } from 'react-router-dom';

export const routes = [
  {
    path: '/admin',
    component: AdminMain,
    routes: [
      {
        path: '/admin/dashboard',
        exact: true,
        component: Dashboard,
      },
      {
        path: '/admin/users',
        exact: true,
        component: AdminUsers,
      },
      {
        path: '/admin/houses',
        exact: true,
        component: AdminHouses,
      },
      {
        path: '/admin/account',
        exact: true,
        component: Account,
      },
      {
        path: '/admin/settings',
        exact: true,
        component: Settings,
      },
    ],
  },
  {
    path: '/',
    component: Main,
    routes: [
      {
        path: '/',
        exact: true,
        component: Homepage,
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: NotFound,
      },
      {
        path: '/signin',
        exact: true,
        component: SignIn,
      },
      {
        path: '/signup',
        exact: true,
        component: SignUp,
      },
      {
        path: '/houses',
        exact: true,
        component: MoreHouses,
      },
      {
        path: '/houses/:houseSlug',
        exact: true,
        component: HouseDetails,
      },
      {
        component: () => <Redirect to='/errors/error-404' />,
      },
    ],
  },
];
