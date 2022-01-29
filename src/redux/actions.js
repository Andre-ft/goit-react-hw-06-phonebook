import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

// export const myAction = value => ({
//   type: 'MY_ACTION',
//   payload: value,
// });

// export const myAction2 = {
//   type: 'MY_ACTION_2',
//   payload: 'super payload 2',
// };

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');

// const contactsActions = { addContact, deleteContact, changeFilter };
// export default contactsActions;
