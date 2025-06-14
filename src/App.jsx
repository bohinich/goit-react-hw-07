import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { fetchContacts } from './redux/contactsOps';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Книга контактів</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
