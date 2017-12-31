import React from "react";

const UserCard = props => {
  return (
    <div className="card">
      <img
        className="card-img-top rounded-circle"
        src={props.userData.user.photoURL}
        alt={props.userData.user.displayName}
      />
      <div className="card-body">
        <h5 className="card-title">Logged as</h5>
        <p className="card-text">{props.userData.user.displayName}</p>
        <p>
          <small className="card-text">
            {props.userData.user.email}
          </small>
        </p>
        <button onClick={props.logOut} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserCard;
