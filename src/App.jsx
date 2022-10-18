import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from 'components/PrivateRout';
import { PublicRoute } from 'components/PublicRoute';
import { selectIsFetchingCurrent } from 'redux/auth/auth-selectors';

// const HomeView = lazy(() => import('./components/HomeView/HomeView'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(selectIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrent && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<HomeView />} /> */}

          <Route
            path="register"
            element={<PublicRoute restricted component={<Register />} />}
          />

          <Route
            path="login"
            element={
              <PublicRoute
                redirectTo="/contacts"
                restricted
                component={<Login />}
              />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    )
  );
};
