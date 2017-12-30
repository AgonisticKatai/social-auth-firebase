import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap-social/assets/css/font-awesome.css";

firebase.initializeApp({
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  databaseURL: "FIREBASE_DATA_BASE_URL",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID"
});

ReactDOM.render(<App />, document.getElementById("root"));
