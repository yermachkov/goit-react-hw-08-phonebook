import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUsername } from 'redux/auth/auth-selectors';
import { Box } from 'components/Box/Box';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);

  return (
    <Box gridGap={12} display="flex" alignItems="center">
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </Box>
  );
}
