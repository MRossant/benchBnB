import React from "react";
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import {login, signup} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  ReactDOM.render(<Root store={store}/>, root);
});