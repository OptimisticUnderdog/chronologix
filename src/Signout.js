import React, { Component } from 'react';
import './Signout.css';

class Signout extends Component {
  render() {
    return (
      <div className="signout-container">
        <div className="signout-content">
          <h1 className="signout-heading">You have been successfully logged out.</h1>
          <p className="signout-text">
            Thank you for using ChronoLogix. You can now close this page or return to the <a href='Login.js' class='login-link'>login</a> page,
             your shift work hours have been recorded.
          </p>
          <img src="/logout.jpg" alt="Logout" className="logout-icon" />
        </div>
      </div>
    );
  }
}

export default Signout;

