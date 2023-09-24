import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './config/fire.js';
import './Home.css';
import Signout from './Signout';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 8 * 60 * 60, // 8 hours in seconds
    };
  }

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
        <div class="home-container">
            <header class="header">
                <h1>ChronoLogix</h1>
                <h3>Empowering Efficiency, Elevating Time.</h3>
            </header>
    
            <section class="welcome-section">
                <h3>Welcome Back!</h3>
                <h6 class="welcome-text">You have successfully signed in with ChronoLogix. Your time is now being tracked.</h6>
                <h6 class="additional-text">Make the most of your productive hours. Happy and efficient working!</h6>
            </section>

            <div class="timer-section">
                <p class="time-remaining">Time remaining: {this.formatTime(this.state.timer)}</p>
            </div>

            <div class="hero-image">
                <img src="countdown.svg" alt="hero-img" width="300" height="300"/>
            </div>

            <div>
              <button class="logout-button" onClick={this.logout}>Logout</button>
            </div>
            
            <section class="support-section">
                <p class="support-text">Our <a class="link" href="about.html">support</a> team is ready to assist with any queries or needs you may have,<a class="link" href="Contact.html"> contact us</a>.</p>
                <p class="success-text">Clock in, excel, and let every moment contribute to your success!</p>
            </section>           
        </div>         
    );
  }
}