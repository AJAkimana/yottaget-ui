import Cookies from 'js-cookie';

export const setSessionCookie = (session, userInfo) => {
  Cookies.set('PHPSESSIONID', session, { expires: 7 });
  Cookies.remove('USER_DATA');
  Cookies.set('USER_DATA', userInfo, { expires: 7 });
};
export const setSessionUser = (userInfo) => {
  Cookies.remove('USER_DATA');
  Cookies.set('USER_DATA', userInfo);
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get();
  if (
    sessionCookie['PHPSESSIONID'] === undefined ||
    sessionCookie['USER_DATA'] === undefined
  ) {
    return null;
  } else {
    return JSON.parse(sessionCookie['USER_DATA']);
  }
};
export const getSessionUser = () => {
  const sessionUser = Cookies.get('USER_DATA');

  if (sessionUser === undefined) {
    return {};
  } else {
    return JSON.parse(sessionUser);
  }
};
