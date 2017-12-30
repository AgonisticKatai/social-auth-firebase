import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap-social/assets/css/font-awesome.css";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID
});

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
