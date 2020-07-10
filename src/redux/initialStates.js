/**
 *
 * @param {string} key Key of initial state
 * @param {object} value Its value
 */
export const baseState = (key, value) => {
  return {
    loading: false,
    loaded: false,
    [key]: value,
  };
};

export const loginState = {
  loggingIn: false,
  loggedIn: false,
  isAuthenticated: false,
  userInfo: {},
};
export const registerState = {
  registering: false,
  registered: false,
  userInfo: {},
};
export const searchState = {
  loading: false,
  loaded: false,
  results: { houses: [], locations: [] },
};
