import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import types from './contacts-types';

// export const addContact = createAction(ADD, ({ name, number }) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

// export const deleteContact = createAction(DELETE);
// export const changeFilter = createAction(CHANGE_FILTER);

export const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// export default { addContact, deleteContact, changeFilter };
