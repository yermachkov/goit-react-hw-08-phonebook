import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { Box } from './Box/Box';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap={10}
      width={[1 / 4]}
      ml={'auto'}
      mr={'auto'}
      p={20}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <p>Request is in progress...</p>}

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}

      {!isLoading && !error && contacts.length === 0 && (
        <h2>No contacts yet. Fill the fields to add some.</h2>
      )}
    </Box>
  );
};
