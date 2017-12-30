import React, { Component } from "react";

class LoginButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.props.googleAuth}
          className="btn btn-social btn-google"
        >
          <span className="fa fa-google" />Login with Google
        </button>
        <button
          onClick={this.props.facebookAuth}
          className="btn btn-social btn-facebook"
        >
          <span className="fa fa-facebook" />Login with Facebook
        </button>
      </div>
    );
  }
}

export default LoginButtons;
