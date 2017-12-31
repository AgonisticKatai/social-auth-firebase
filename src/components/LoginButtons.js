import React from "react";

const LoginButtons = props => {
  return (
    <div>
      <button
        onClick={props.googleAuth}
        className="btn btn-social btn-google"
      >
        <span className="fa fa-google" />Login with Google
      </button>
      <button
        onClick={props.facebookAuth}
        className="btn btn-social btn-facebook"
      >
        <span className="fa fa-facebook" />Login with Facebook
      </button>
    </div>
  );
}

export default LoginButtons;
