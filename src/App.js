import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import s from './App.module.css';

export default function App() {
   return (
    <div className={s.App}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList  />
    </div>
  );
}
