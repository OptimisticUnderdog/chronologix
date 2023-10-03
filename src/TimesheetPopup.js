import React, { Component } from 'react';

class TimesheetPopup extends Component {
  render() {
    const { showTimesheet, onClose } = this.props;

    const timesheetStyle = {
        display: showTimesheet ? 'block' : 'none',
        position: 'fixed',
        top: '10%',
        left: '18%',
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '5px',
        boxShadow: '25px 25px 25px 25px rgba(0, 0, 0, 0.2)',
        zIndex: '1000',
      };
  
      const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
      };
  
      const thStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        textAlign: 'left',
      };
  
      const tdStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        textAlign: 'left',
      }

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
  
      const closeButtonHoverStyle = {
        backgroundColor: 'darkblue', // Background color on hover
      };

      return (
        <div style={timesheetStyle}>
          <div className="timesheet-container">
            <h2>Timesheet</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Day</th>
                  <th style={thStyle}>Week 1</th>
                  <th style={thStyle}>Week 2</th>
                  <th style={thStyle}>Week 3</th>
                  <th style={thStyle}>Week 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Monday</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours(Remote)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Tuesday</td>
                  <td style={tdStyle}>7.5 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (Remote)</td>
                  <td style={tdStyle}>9 hours (On-Site)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Wednesday</td>
                  <td style={tdStyle}>8.5 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Thursday</td>
                  <td style={tdStyle}>7 hours (Remote)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Friday</td>
                  <td style={tdStyle}>9 hours (On-Site)</td>
                  <td style={tdStyle}>8 hours (Remote)</td>
                  <td style={tdStyle}>8 hours (On-Site)</td>
                  <td style={tdStyle}>In-Progress (Remote)</td>
                </tr>
              </tbody>
              <h4>Total Hours Worked: 152 of 160 Hours</h4>
            </table>
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
  
  export default TimesheetPopup;
