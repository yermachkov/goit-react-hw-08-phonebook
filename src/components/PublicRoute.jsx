import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoute = ({
  component: Component,
  redirectTo = '/',
  restricted = false,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
