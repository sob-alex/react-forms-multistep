import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Grow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { FORMIK, REACT_HOOK_FROM } from '../../constants';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});
const Home = () => {
  const [isCardsShown, setIsCardsShown] = useState({
    first: false,
    second: false,
  });
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setIsCardsShown((prev) => ({ ...prev, first: true }));
    }, 500);
    setTimeout(() => {
      setIsCardsShown((prev) => ({
        ...prev,
        second: true,
      }));
    }, 900);
  }, []);
  return (
    <Box mt={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Link className={classes.link} to='/formik'>
            <Grow in={isCardsShown.first} timeout={1000}>
              <Box height='100%'>
                <Card
                  imageUrl={FORMIK.IMAGE}
                  title='Formik'
                  text={FORMIK.TEXT}
                />
              </Box>
            </Grow>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link className={classes.link} to='/multistep'>
            <Grow in={isCardsShown.second} timeout={1000}>
              <Box height='100%'>
                <Card
                  imageUrl={REACT_HOOK_FROM.IMAGE}
                  title='React Hook Form'
                  text={REACT_HOOK_FROM.TEXT}
                />
              </Box>
            </Grow>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
