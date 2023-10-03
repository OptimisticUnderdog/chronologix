import React, { Component } from 'react';
import './NotificationsPopup.css';
import NotificationPopup from './NotificationPopup';
import firebase from './config/fire.js';

class Notifications extends Component {
    constructor(props) {
      super(props);
      this.state = {
        notifications: [], // An array to store notifications
      };
    }

    componentDidMount() {
        this.fetchNotifications(); // Fetch notifications when the component mounts
    }

    fetchNotifications() {
        // Fetch notifications from your data source and update the state
        // For example, you can use a Firebase reference
        const notificationsRef = firebase.database().ref('notifications');

        notificationsRef.on('value', (snapshot) => {
            const notifications = snapshot.val();
            if (notifications) {
              const notificationsArray = Object.values(notifications);
              this.setState({ notifications: notificationsArray });
            }
          });
        }

    render() {
        return (
            <div className="notifications-container">
                <h2>Notifications</h2>
            </div>
        );
      }
    }
    
export default Notifications;