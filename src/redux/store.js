import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { ADD, DELETE, CHANGE_FILTER } from './contacts/contacts-types';
import contactReducer from './contacts/contacts-reducer';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

const rootReducer = combineReducers({ contacts: contactReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };
