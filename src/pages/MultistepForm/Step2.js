import React from 'react';
import {
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from '../../store/context/FormContext';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { PrimaryButton } from './components/PrimaryButton';
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { Input } from './components/Input';
import * as yup from 'yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

export const Step2 = () => {
  let { url } = useRouteMatch();
  const { setValues, data } = useData();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    resolver: yupResolver(schema),
  });
  const hasPhone = watch('hasPhone');

  const onSubmit = (data) => {
    history.push(`/multistep/step3`);
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id='email'
          type='email'
          label='Email'
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <Controller
          name='hasPhone'
          control={control}
          defaultValue={data.hasPhone}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  defaultValue={data.hasPhone}
                  defaultChecked={data.hasPhone}
                  color='primary'
                  {...field}
                  name='hasPhone'
                />
              }
              label='Do you have a phone'
            />
          )}
        />

        {hasPhone && (
          <Input
            {...register('phoneNumber')}
            id='phoneNumber'
            type='tel'
            label='Phone Number'
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(
                event.target.value
              );
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
