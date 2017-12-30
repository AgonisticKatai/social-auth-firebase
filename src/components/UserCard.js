import React, { Component } from "react";

class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top rounded-circle"
          src={this.props.userData.user.photoURL}
          alt={this.props.userData.user.displayName}
        />
        <div className="card-body">
          <h5 className="card-title">Logged as</h5>
          <p className="card-text">{this.props.userData.user.displayName}</p>
          <p>
            <small className="card-text">
              {this.props.userData.user.email}
            </small>
          </p>
          <button onClick={this.props.logOut} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default UserCard;
