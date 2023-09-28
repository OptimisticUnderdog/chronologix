import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './config/fire.js';
import './Home.css';
import Signout from './Signout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartBar, faCogs, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 8 * 60 * 60, // 8 hours in seconds
    };
  }

  toggleSidePanel = () => {
    this.setState((prevState) => ({
      sidePanelClosed: !prevState.sidePanelClosed,
    }));
  };

  componentDidMount() {
    this.timerInterval = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  updateTimer = () => {
    this.setState((prevState) => ({
      timer: prevState.timer - 1,
    }));
  };

  logout = () => {
    firebase.auth().signOut();
  };

  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes}:${remainingSeconds}`;
  }

  render() {
    return (
      <div class="dashboard-container">
        <div class="side-panel">
        <div class="logo">
          <h1>ChronoLogix</h1>
        </div>
       <ul class="menu">
        <li><a href="#"><i class="fas fa-cogs"></i> Notifications</a></li>
          <li><a href="#"><i class="fas fa-chart-bar"></i> Analytics</a></li>
          <li><a href="#"><i class="fas fa-cogs"></i> Timesheet</a></li>
          <li><a href="#"><i class="fas fa-cogs"></i> Profile</a></li>
          <li><a href="#"><i class="fas fa-cogs"></i> Settings</a></li>
          <li><a href="#"><i class="fas fa-question-circle"></i> Support</a></li>
          <li><a href="#"><i class="fas fa-cogs"></i> FAQ</a></li>
          <button class="logout-button" onClick={this.logout}>Logout</button>
        </ul>
      </div>
      <div class="main-content">
          <div class="home-container">
              <header class="header">
                  <h1>ChronoLogix</h1>
                  <h3>Empowering Efficiency, Elevating Time.</h3>
              </header>
              <section class="welcome-section">
                  <h3>Welcome Back!</h3>
                  <p class="welcome-text">You have successfully signed in with ChronoLogix. Your time is now being tracked.</p>
              </section>
              <div class="timer-section">
                  <p class="time-remaining">Time remaining: {this.formatTime(this.state.timer)}</p>
              </div>
              <div class="hero-image">
                  <img src="countdown.svg" alt="hero-img" width="300" height="300"/>
                  <p class="additional-text">Make the most of your productive hours. Happy and efficient working!</p>
              </div>
          </div>
      </div>
  </div>
           
    );
  }
}
