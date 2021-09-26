import React from 'react';
import {
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useData } from '../../store/context/FormContext';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton } from './components/PrimaryButton';
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { Input } from './components/Input';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(
      /^([^0-9]*)$/,
      'First name should not contain numbers'
    )
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(
      /^([^0-9]*)$/,
      'Last name should not contain numbers'
    )
    .required('Last name is a required field'),
});

export const Step1 = () => {
  const { setValues, data } = useData();
  let { url } = useRouteMatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push(`/multistep/step2`);
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('firstName')}
          id='firstName'
          type='text'
          label='First Name'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register('lastName')}
          id='lastName'
          type='text'
          label='Last Name'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
