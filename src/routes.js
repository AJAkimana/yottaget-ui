import React from 'react';
import {
  Main,
  Homepage,
  MoreHouses,
  HouseDetails,
  SignIn,
  SignUp,
  NotFound,
} from './views';
import { Redirect } from 'react-router-dom';
import { AdminMain } from './views/AdminMain';

export const routes = [
  {
    path: '/admin',
    component: AdminMain,
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
