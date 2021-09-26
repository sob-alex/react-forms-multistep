import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
const RequireAuth = ({ children }) => {
  const isAuthorized = useSelector(
    (state) => state.app.isAuthorized
  );
  if (!isAuthorized) {
    return <Redirect to='/' />;
  }

  return children;
};
export default RequireAuth;
