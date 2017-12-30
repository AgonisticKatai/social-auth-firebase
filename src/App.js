import React, { Component } from "react";
import firebase from "firebase";

import {
  HandleGoogleAuth,
  HandleFacebookAuth,
  HandleLogout
} from "services/authServices";

import RenderLoginButton from "components/RenderLoginButton";

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
      return (
        <div className="card">
          <img
            className="card-img-top rounded-circle"
            src={this.state.user.photoURL}
            alt={this.state.user.displayName}
          />
          <div className="card-body">
            <h5 className="card-title">Logged as</h5>
            <p className="card-text">{this.state.user.displayName}</p>
            <p>
              <small className="card-text">{this.state.user.email}</small>
            </p>
            <button onClick={this.handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
        </div>
      );
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
