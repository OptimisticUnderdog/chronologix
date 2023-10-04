import React, { Component } from 'react';
import * as FeatherIcons from 'feather-icons-react';

class NotificationPopup extends Component {
  render() {
    const { showNotifications, onClose } = this.props;

    const popupStyle = {
      display: showNotifications ? 'block' : 'none',
      position: 'fixed',
      top: '10%',
      left: '18%',
      backgroundColor: '#fff',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '25px 25px 25px 25px rgba(0, 0, 0, 0.2)',
      zIndex: '1000',
    };

    const listItemStyle = {
      borderBottom: '2px solid #ccc',
      padding: '15px 0',
      listStyle: 'none',
      cursor: 'pointer',
    };

    const closeButtonStyle = {
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '17px',
      border: 'none',
      padding: '12px 30px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      margin:'10px 0 0'
    };
    
    const closeButtonHoverStyle = {
      backgroundColor: 'darkblue',
    };

    return (
      <div style={popupStyle}>
        <div className="notifications-container">
                <h2>Notifications  <FeatherIcons.Bell size={20} color="black" /></h2> 
                <ul style={{ padding: 0, margin: 0 }}>
                    <li style={listItemStyle}>Check your schedule for today... <span style={{ color: 'navy' }}>New</span></li>
                    <li style={listItemStyle}>Task deadline approaching... <span style={{ color: 'navy' }}>New</span></li>
                    <li style={listItemStyle}>Meeting reminder for tomorrow...</li>
                    <li style={listItemStyle}>Weekly progress report is due...</li>
                    <li style={listItemStyle}>Project status meeting in one...</li>
                    <li style={listItemStyle}>Review your goals for the week...</li>
                </ul>
            </div>
        <button style={closeButtonStyle} onClick={onClose} onMouseEnter={(e) => e.target.style.backgroundColor = 'darkblue'} // Apply hover style on mouse enter
        onMouseLeave={(e) => e.target.style.backgroundColor = '#b3001e'}>Close</button>
      </div>
    );
  }
}

export default NotificationPopup;

