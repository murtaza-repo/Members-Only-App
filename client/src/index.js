import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHZeSaSGnfJHDZBzABmUaEK_Jkn-aG710",
  authDomain: "members-only1.firebaseapp.com",
  projectId: "members-only1",
  storageBucket: "members-only1.appspot.com",
  messagingSenderId: "464882274791",
  appId: "1:464882274791:web:c6ba1375b30eb247b06d42",
  measurementId: "G-WFQMGMMKF6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
