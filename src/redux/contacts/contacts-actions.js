import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { ADD, DELETE, CHANGE_FILTER } from './contacts/contacts-types';

// export const addContact = createAction(ADD, ({ name, number }) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

// export const deleteContact = createAction(DELETE);
// export const changeFilter = createAction(CHANGE_FILTER);

const addContact = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
