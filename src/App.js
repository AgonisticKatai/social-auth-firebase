import React, { Component } from "react";
import firebase from "firebase";

import {
  HandleGoogleAuth,
  HandleFacebookAuth,
  HandleGithubAuth,
  HandleLogout
} from "services/authServices";

import UserCard from "components/UserCard";
import LoginButtons from "components/LoginButtons";

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

  handleGithubAuth = async () => {
    await HandleGithubAuth();
  };

  handleLogout = async () => {
    await HandleLogout();
  };

  renderLoginButton = () => {
    return this.state.user ? (
      <UserCard userData={this.state} logOut={this.handleLogout} />
    ) : (
      <LoginButtons
        googleAuth={this.handleGoogleAuth}
        facebookAuth={this.handleFacebookAuth}
        githubAuth={this.handleGithubAuth}
      />
    );
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
