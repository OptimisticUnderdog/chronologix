import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './config/fire.js';
import './Home.css';
import TimesheetPopup from './TimesheetPopup';
import AnalyticsPopup from './AnalyticsPopup.js';
import ProfilePopup from './ProfilePopup';
import NotificationsPopup from './NotificationPopup';
import SupportPopup from './SupportPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartBar, faCogs, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as FeatherIcons from 'feather-icons-react';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 8 * 60 * 60, // 8 hours in seconds
      showNotifications: false,
      showAnalyticsPopup: false,
      showTimesheetPopup: false,
      showProfilePopup: false,
      showSupportPopup: false,
    };
  }

  toggleSidePanel = () => {
    this.setState((prevState) => ({
      sidePanelClosed: !prevState.sidePanelClosed,
    }));
  };

  componentDidMount() {
    this.timerInterval = setInterval(this.updateTimer, 1000);
    this.getLocation();
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

  // Function to request user's location
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showLocation, this.handleLocationError);
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }

  // Function to handle location retrieval success
  showLocation = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Reverse geocoding service 
    const apiKey = 'bc715356bc3a4ef7ae201278ed4ba1f2';
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const address = data.results[0].formatted;
          this.setState({ location: address });
        } else {
          this.setState({ location: "Location not found" });
        }
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
        this.setState({ location: "Error fetching location data" });
      });
  };

  // Function to handle location retrieval error
  handleLocationError = (error) => {
    console.error("Error getting user's location:", error);
    this.setState({ location: "Error getting user's location" });
  };

  toggleNotifications = () => {
    this.setState((prevState) => ({
      showNotifications: !prevState.showNotifications,
    }));
  }

  handleCloseNotification = () => {
    this.setState({ showNotifications: false });
  }

  toggleAnalyticsPopup = () => {
    this.setState((prevState) => ({
      showAnalyticsPopup: !prevState.showAnalyticsPopup,
    }));
  };

  toggleTimesheetPopup = () => {
    this.setState((prevState) => ({
      showTimesheetPopup: !prevState.showTimesheetPopup,
    }));
  };
  
  toggleProfilePopup = () => {
    this.setState((prevState) => ({
      showProfilePopup: !prevState.showProfilePopup,
    }));
  };  

  toggleSupportPopup = () => {
    this.setState((prevState) => ({
      showSupportPopup: !prevState.showSupportPopup,
    }));
  }; 

  render() {

    const notificationContent = (
      <div>
        <h3>New Notification</h3>
      </div>
    );

    return (
      <div class="dashboard-container">
        <div class="side-panel">
        <div class="logo">
          <h1>ChronoLogix</h1>
        </div>
        <div class="separator"></div>
       <ul class="menu">
       <h3 class="head" style={{ color: '#fff' }}>Dashboard <FeatherIcons.Layers size={20} color="white" /></h3>
          <li><a href="#" onClick={this.toggleNotifications}><i class="fas fa-cogs"></i> Notifications</a></li>
          <li><a href="#" onClick={this.toggleAnalyticsPopup}><i class="fas fa-chart-bar"></i> Analytics</a></li>
          <li><a href="#" onClick={this.toggleTimesheetPopup}><i class="fas fa-cogs"></i> Timesheet</a></li>
          <li><a href="#" onClick={this.toggleProfilePopup}><i class="fas fa-cogs"></i> Profile</a></li>
          <li><a href="#" onClick={this.toggleSupportPopup}><i class="fas fa-question-circle"></i> Support</a></li>
          <button class="logout-button" onClick={this.logout}><FeatherIcons.LogOut size={15} color="white" />  Logout</button>
        </ul>
      </div>
      <div class="main-content">
          {this.state.showNotifications && (
            <NotificationsPopup
              showNotifications={this.state.showNotifications}
              onClose={this.handleCloseNotification}
              notificationContent={notificationContent}
            />
          )}

          {this.state.showAnalyticsPopup && (
            <AnalyticsPopup
              showAnalytics={this.state.showAnalyticsPopup} 
              onClose={this.toggleAnalyticsPopup}
            />
          )}

          {this.state.showTimesheetPopup && (
            <TimesheetPopup
              showTimesheet={this.state.showTimesheetPopup}
              onClose={this.toggleTimesheetPopup}
            />
          )}

          {this.state.showProfilePopup && (
            <ProfilePopup
              showProfile={this.state.showProfilePopup}
              onClose={this.toggleProfilePopup}
            />
          )}

          {this.state.showSupportPopup && (
            <SupportPopup 
              showSupport={this.state.showSupportPopup} 
              onClose={this.toggleSupportPopup} 
            />
          )}


          <div class="home-banner">
            <header class="header">
              <h1>ChronoLogix  <FeatherIcons.Aperture size={40} color="black" /></h1>
              <h3>Empowering Efficiency, Elevating Time.</h3>
            </header>
          </div>

          <div class="separator"></div>

          <div class="home-container">
              <section class="welcome-section">
              <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Welcome Back!</h1>
                  <p class="welcome-text">You have successfully signed in with ChronoLogix. Your location and time is now being tracked.</p>
              </section>

              <div class="user-location">
                <p class="location-text"><FeatherIcons.MapPin size={20} color="black" />  Location: {this.state.location || "Loading..."}</p>
              </div>

              <div class="timer-section">
                  <p class="time-remaining">
                    Time remaining: <span className="countdown">{this.formatTime(this.state.timer)}</span>
                  </p>
              </div>
              
              <div class="hero-image">
                  <img src="#" alt=""/>
                  <p class="additional-text">Make the most of your productive hours. Happy and efficient working!</p>
              </div>
              <footer>
                &copy; 2023 ChronoLogix. All Rights Reserved.
              </footer>
          </div>
      </div>
  </div>      
    );
  }
}

export default Home;
