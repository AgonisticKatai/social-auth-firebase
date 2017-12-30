import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap-social/assets/css/font-awesome.css";

firebase.initializeApp({
  apiKey: "AIzaSyAJgYV72RDo-M74Nez9WAjuA0otUPjKm_A",
  authDomain: "photo-collection-1d4ad.firebaseapp.com",
  databaseURL: "https://photo-collection-1d4ad.firebaseio.com",
  projectId: "photo-collection-1d4ad",
  storageBucket: "photo-collection-1d4ad.appspot.com",
  messagingSenderId: "48864678337"
});

ReactDOM.render(<App />, document.getElementById("root"));
