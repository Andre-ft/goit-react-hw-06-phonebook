import React from 'react';
import s from './ContactList.module.css';
import { deleteContact} from '../../redux/contacts/contacts-actions'
import { connect, useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

  
export default function ContactList() {

  const contactList = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact =(id)=> dispatch(deleteContact(id))


  return (<>
    <ul className="contactList">
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          {name} : {number}
          <button
            type="button"
            className={s.deleteButton}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>)
};
