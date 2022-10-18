import { useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '../components/Box/Box';
import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactList';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

const Contacts = () => {
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

export default Contacts;
