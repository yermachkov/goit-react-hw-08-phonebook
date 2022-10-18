import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
