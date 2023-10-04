import React, { Component } from 'react';
import AnalyticsPopup from './AnalyticsPopup';
import * as FeatherIcons from 'feather-icons-react';

class Analytics extends Component {
  render() {
    const { showAnalytics, onClose } = this.props;

    const analyticsStyle = {
      display: showAnalytics ? 'block' : 'none',
      position: 'fixed',
      top: '10%',
      left: '18%',
      backgroundColor: '#fff',
      padding: '25px',
      borderRadius: '5px',
      boxShadow: '25px 25px 25px 25px rgba(0, 0, 0, 0.2)',
      zIndex: '1000',
    };
    
    const listItemStyle = {
      borderBottom: '2px solid #ccc',
      padding: '20px 0',
      paddingBottom: '10px',
      listStyle: 'none',
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
      margin: '10px 0 0',
    };

    const headingStyle = {
      fontWeight: 'bold',
    };
    
    const closeButtonHoverStyle = {
      backgroundColor: '#b3001e', 
    };
    
    const analyticsContainerStyle = {
      paddingBottom: '20px',
    };
    
    const nestedListStyle = {
      paddingBottom: '10px', 
    };

    return (
      <div style={analyticsStyle}>
      <div className="analytics-container" style={analyticsContainerStyle}>
      <h2>Analytics  <FeatherIcons.Clipboard size={20} color="black" /></h2>
        <ul style={{ padding: 0, margin: 0 }}>
            <li style={listItemStyle}>Total hours worked last week: 43.5 hours</li>
            <li style={listItemStyle}>On-going Project completion rate: 65%</li>
          <ul style={{ ...listItemStyle, ...nestedListStyle }}> 
            <li style={headingStyle}>Top-performing employees:</li>
            <li>Tokologo Chabalala: 90% efficiency</li>
            <li>Mfumu Mabunda: 85% efficiency</li>
          </ul>

          <ul style={{ ...listItemStyle, ...nestedListStyle }}>
            <li style={headingStyle}>Project progress:</li>
            <li>Task A: 60% completed</li>
            <li>Task B: 45% completed</li>
          </ul>
        </ul>
  </div>
  <button
    style={closeButtonStyle}
    onClick={onClose}
    onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkblue')}
    onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
  >
    Close
  </button>
</div>

    );
  }
}

export default Analytics;
