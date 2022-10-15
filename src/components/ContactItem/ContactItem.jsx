import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from '../ContactsList/ContactList.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, phone } = contact;
  return (
    <>
      <p>
        {name}: {phone}
      </p>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </>
  );
};
