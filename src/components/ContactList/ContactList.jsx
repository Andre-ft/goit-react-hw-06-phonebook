import React from 'react';
import s from './ContactList.module.css';
import {addContact, deleteContact, changeFilter} from '../../redux/contacts/contacts-actions'
import { connect } from 'react-redux';


const ContactList = ({ contactList, onDeleteContact }) => (
  <>
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
  </>
);

export default ContactList;

// const mapStateToProps = state => {
//   return {
    // contactList: state.contacts.items, // - ?????
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (id) => dispatch(deleteContact({id})),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);