import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Container, Header, Link } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu/UserMenu';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        <nav>
          {!isLoggedIn ? <Link to="/register">Register</Link> : null}
          {!isLoggedIn ? <Link to="/login">Login</Link> : null}
          <Link to="/contacts">Contacts</Link>
        </nav>
        {isLoggedIn && <UserMenu />}
      </Header>
      <h1>Phonebook</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
