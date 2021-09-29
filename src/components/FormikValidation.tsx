import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuthorized } from '../store/redux/appSlice';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  boxContainer: {
    width: '100%',
  },
  textField: {
    marginTop: theme.spacing(1),
  },
}));

const validationSchema = yup.object({
  firstName: yup
    .string()
    .max(12, 'Max 12 characters')
    .required('FirstName is required'),
  lastName: yup
    .string()
    .max(12, 'Max 12 characters')
    .required('LastName is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(
      8,
      'Password should be of minimum 8 characters length'
    )
    .required('Password is required'),
  accepted: yup
    .boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms'),
});

const FormikValidation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      accepted: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      dispatch(setIsAuthorized(true));
      history.push('/dashboard');
    },
  });
  return (
    <Container className={classes.container} maxWidth='xs'>
      <Box mt={4} className={classes.boxContainer}>
        <Paper elevation={3}>
          <form onSubmit={formik.handleSubmit}>
            <Box p={2}>
              <Box textAlign='center'>
                <Typography variant='h5' gutterBottom>
                  Register Form
                </Typography>
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    //   className={classes.textField}
                    id='outlined-basic'
                    label='First name'
                    variant='outlined'
                    margin='dense'
                    fullWidth
                    {...formik.getFieldProps('firstName')}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName &&
                      formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    //   className={classes.textField}
                    id='outlined-basic'
                    label='Last name'
                    variant='outlined'
                    margin='dense'
                    fullWidth
                    {...formik.getFieldProps('lastName')}
                    error={
                      formik.touched.lastName &&
                      Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName &&
                      formik.errors.lastName
                    }
                  />
                </Grid>
              </Grid>
              <TextField
                //   className={classes.textField}
                id='outlined-basic'
                label='Email'
                variant='outlined'
                margin='dense'
                fullWidth
                {...formik.getFieldProps('email')}
                error={
                  formik.touched.email &&
                  Boolean(formik.errors.email)
                }
                helperText={
                  formik.touched.email &&
                  formik.errors.email
                }
              />
              <TextField
                //   className={classes.textField}
                id='outlined-basic'
                label='Password'
                variant='outlined'
                margin='dense'
                fullWidth
                {...formik.getFieldProps('password')}
                error={
                  formik.touched.password &&
                  Boolean(formik.errors.password)
                }
                helperText={
                  formik.touched.password &&
                  formik.errors.password
                }
              />
              <FormControl
                required
                error={
                  formik.touched.accepted &&
                  Boolean(formik.errors.accepted)
                }
                component='fieldset'
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      {...formik.getFieldProps('accepted')}
                    />
                  }
                  label='I accept rules'
                />
                {formik.touched.accepted &&
                  Boolean(formik.errors.accepted) && (
                    <FormHelperText>
                      {formik.errors.accepted}
                    </FormHelperText>
                  )}
              </FormControl>
              <Box mt={2}>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  type='submit'
                >
                  Register
                </Button>
              </Box>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default FormikValidation;
