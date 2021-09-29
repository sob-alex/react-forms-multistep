import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useData } from '../../store/context/FormContext';
import { MainContainer } from './components/MainContainer';
import { FileInput } from './components/FileInput';
import { PrimaryButton } from './components/PrimaryButton';
import Typography from '@material-ui/core/Typography';
import { Form } from './components/Form';
import { IFormData } from '../../types/types';

export const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm<IFormData>({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data: IFormData) => {
    history.push('/multistep/result');
    // @ts-ignore
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name='files' control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
