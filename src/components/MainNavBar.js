import React, { useState } from 'react';
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
} from '@material-ui/core';
import {
  AccountCircle,
  ComputerRounded,
  MoreVert,
  Search,
} from '@material-ui/icons';
import { useStyles } from '../utils/customStyles';
import { SearchHouse } from './SearchHouse';

const navs = [
  { name: 'Home', link: '/' },
  { name: 'Add you house', link: '/add-house' },
  { name: 'Help', link: '/help' },
  { name: 'Log in', link: '/signin' },
  { name: 'Sign up', link: '/signup' },
];
export const MainNavBar = ({ history }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <SearchHouse open={openSearch} setOpen={() => setOpenSearch(false)} />
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
