import { Main, Homepage } from './views';

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
    ],
  },
];
