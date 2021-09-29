import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useAppSelector } from './hooks';

const RequireAuth: FC = ({ children }) => {
  const isAuthorized = useAppSelector(
    (state) => state.app.isAuthorized
  );
  if (!isAuthorized) {
    return <Redirect to='/' />;
  }

  return <div>{children}</div>;
};
export default RequireAuth;
