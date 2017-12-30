import React, { Component } from "react";
import firebase from "firebase";
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
    try {
      const provider = await new firebase.auth.GoogleAuthProvider();
      const response = await firebase.auth().signInWithPopup(provider);
      console.log(`Logged as ${response.user.email}`);
    } catch (err) {
      console.log(err);
    }
  };

  handleFacebookAuth = async () => {
    try {
      const provider = await new firebase.auth.FacebookAuthProvider();
      const response = await firebase.auth().signInWithPopup(provider);
      console.log(`Logged as ${response.user.email}`);
    } catch (err) {
      console.log(err);
    }
  };

  handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  renderLoginButton = () => {
    if (this.state.user) {
      return (
        <div>
          <img
            rounded
            width="100"
            src={this.state.user.photoURL}
            alt={this.state.user.displayName} />
          <p>Logged as {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={this.handleGoogleAuth}
            className="btn btn-social btn-google">
            <span className="fa fa-google" />Login with Google
          </button>
          <button
            onClick={this.handleFacebookAuth}
            className="btn btn-social btn-facebook">
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
