import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthProvider from './contexts/auth/Provider';
import 'react-toastify/dist/ReactToastify.css';
import { myAction, myAction2 } from './redux/actions';

// const { log } = console;
// log('store', store);
// store.dispatch(myAction(5));
// store.dispatch(myAction(12));

// store.dispatch(myAction2);

// log('get state', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
