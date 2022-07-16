import React, { useState } from "react";
import { useSelector } from "react-redux";

function ProfileTabs() {
  const users = useSelector((state: any) => state.auth.login.currentUser.user);
  return (
    <form className="row  form-container">
      <div className="col-md-6">
        <div className="form">
          <label htmlFor="account-fn">UserName</label>
          <input
            value={users.usename}
            className="form-control"
            type="text"
            required
          />
        </div>
      </div>

      <div className="col-md-6">
        <div className="form">
          <label htmlFor="account-email">E-mail Address</label>
          <input
            value={users.email}
            className="form-control"
            type="email"
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form">
          <label htmlFor="account-pass">New Password</label>
          <input className="form-control" type="password" required />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form">
          <label htmlFor="account-confirm-pass">Confirm Password</label>
          <input className="form-control" type="password" required />
        </div>
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default ProfileTabs;
