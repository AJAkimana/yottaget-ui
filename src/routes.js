import {
  Main,
  Homepage,
  MoreHouses,
  HouseDetails,
  SignIn,
  SignUp,
} from './views';

export const routes = [
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
    ],
  },
];
