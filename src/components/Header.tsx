import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { setIsAuthorized } from '../store/redux/appSlice';
import { Box, Divider } from '@material-ui/core';
import { useAppSelector } from '../hooks';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  button: {
    color: 'white',
  },
  logout: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const isAuthorized = useAppSelector(
    (state) => state.app.isAuthorized
  );
  const logout = () => {
    dispatch(setIsAuthorized(false));
    history.push('/');
  };
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Link className={classes.link} to='/'>
            <Button className={classes.button}>Home</Button>
          </Link>
          <Link className={classes.link} to='/multistep'>
            <Button className={classes.button}>
              MULTISTEP
            </Button>
          </Link>
          <Link className={classes.link} to='/formik'>
            <Button className={classes.button}>
              Formik
            </Button>
          </Link>
          {isAuthorized && (
            <Box className={classes.logout}>
              <Link className={classes.link} to='/dashboard'>
                <Button className={classes.button}>
                  Dashboard
                </Button>
              </Link>
              <Divider orientation='vertical' flexItem />
              <Button
                onClick={logout}
                className={classes.button}
              >
                LOGOUT
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
