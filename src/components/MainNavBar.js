import React, { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Button,
  Divider,
  Grid,
  InputBase,
  CssBaseline,
  makeStyles,
  fade,
} from '@material-ui/core';
import { ComputerRounded, MoreVert, Search } from '@material-ui/icons';
import { SearchHouse } from './SearchHouse';
// import { useSelector } from 'react-redux';
import { SessionContext } from './utils';
import { getSessionUser } from '../helpers/sessionUtils';
import { Link } from 'react-router-dom';

const nonAuthnavs = [
  { name: 'Home', link: '/' },
  { name: 'Add your house', link: '/admin/houses' },
  { name: 'Help', link: '/help' },
];
const authNavs = [
  { name: 'Home', link: '/' },
  { name: 'Admin dashboard', link: '/admin/dashboard' },
  { name: 'Add your house', link: '/admin/houses' },
  { name: 'Help', link: '/help' },
];

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: theme.spacing(0),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  gridHome: {
    cursor: 'pointer',
    width: 'fit-content',
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 1.0),
      backgroundColor: theme.palette.background.paper,
    },
  },
  divider: {
    maxHeight: '50%',
  },
}));
export const MainNavBar = ({ history }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const session = useContext(SessionContext);
  const user = getSessionUser();

  // const { authenticated, user } = useSelector(({ session }) => session);
  const navs = session ? authNavs : nonAuthnavs;
  // eslint-disable-next-line no-unused-vars
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Typography component={Link} to='/'>
          Home
        </Typography>
      </MenuItem>
      <MenuItem>
        {session ? (
          <Typography component={Link} to='/admin/dashboard'>
            {user.names}
          </Typography>
        ) : (
          <Typography component={Link} to='/signin'>
            Sign in
          </Typography>
        )}
      </MenuItem>
      <MenuItem>
        <Typography component={Link} to='/'>
          Help
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <SearchHouse
        open={openSearch}
        setOpen={() => setOpenSearch(false)}
        history={history}
      />
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <ComputerRounded />
          </IconButton>
          <Typography
            className={classes.title}
            variant='h4'
            color='inherit'
            noWrap
          >
            YottaGet
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder='Search…'
              onPointerEnter={() => setOpenSearch(true)}
              // onClick={() => setOpenSearch(true)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {navs.map((nav, navIndex) => (
              <Grid
                container
                alignItems='center'
                className={classes.gridHome}
                key={navIndex}
              >
                <Typography
                  variant='subtitle1'
                  color='inherit'
                  noWrap
                  onClick={() => history.push(nav.link)}
                >
                  {nav.name}
                </Typography>
                <Divider orientation='vertical' className={classes.divider} />
              </Grid>
            ))}

            <Grid container alignItems='center' className={classes.gridHome}>
              {session ? (
                <Typography variant='subtitle1' color='inherit' noWrap>
                  {user.names}
                </Typography>
              ) : (
                <Typography
                  variant='subtitle1'
                  color='inherit'
                  noWrap
                  onClick={() => history.push('/signin')}
                >
                  Sign in
                </Typography>
              )}
            </Grid>
            <div className={classes.grow} />
            <Button variant='contained' color='primary'>
              Contact us!
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
