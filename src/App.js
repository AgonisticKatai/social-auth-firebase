import React, { Component } from "react";
import firebase from "firebase";

import {
  HandleGoogleAuth,
  HandleFacebookAuth,
  HandleLogout
} from "services/authServices";

import UserCard from "components/UserCard";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentWillMount = async () => {
    try {
      await firebase.auth().onAuthStateChanged(user => {
        this.setState({ user });
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleGoogleAuth = async () => {
    await HandleGoogleAuth();
  };

  handleFacebookAuth = async () => {
    await HandleFacebookAuth();
  };

  handleLogout = async () => {
    await HandleLogout();
  };

  renderLoginButton = () => {
    if (this.state.user) {
      return <UserCard userData={this.state} logOut={this.handleLogout} />;
    } else {
      return (
        <div>
          <button
            onClick={this.handleGoogleAuth}
            className="btn btn-social btn-google"
          >
            <span className="fa fa-google" />Login with Google
          </button>
          <button
            onClick={this.handleFacebookAuth}
            className="btn btn-social btn-facebook"
          >
            <span className="fa fa-facebook" />Login with Facebook
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Social Auth Firebase</h1>
        </header>
        <div className="App-intro">{this.renderLoginButton()}</div>
      </div>
    );
  }
}

export default App;
