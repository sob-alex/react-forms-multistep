import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log('render')
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName', { required: true })}
      />
      {errors.firstName?.type === 'required' &&
        'First name is required'}

      <input
        {...register('lastName', { required: true })}
      />
      {errors.lastName && 'Last name is required'}

      <input type='submit' />
    </form>
  );
};

export default ReactHookForm;
