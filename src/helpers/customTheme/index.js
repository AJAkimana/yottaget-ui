import { createMuiTheme } from '@material-ui/core/styles';
import { palette } from './palette';
import { typography } from './typography';

export const mainTheme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiOutlinedInput: {
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px #fff inset',
          WebkitTextFillColor: '#000000',
        },
      },
    },
  },
});
