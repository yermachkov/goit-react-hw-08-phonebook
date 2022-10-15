import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="filter">Find a contact by name</label>
      <Input
        type="text"
        name="filter"
        id="filter"
        onChange={e => {
          dispatch(filterContacts(e.target.value));
        }}
      />
    </>
  );
};
