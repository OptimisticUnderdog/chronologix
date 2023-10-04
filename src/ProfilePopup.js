import React, { Component } from 'react';
import * as FeatherIcons from 'feather-icons-react';

class ProfilePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: this.props.showProfile,
      avatarUrl: '', // Store the URL of the avatar image
      uploading: false, // Track whether an upload is in progress
    };
  }

  // Function to handle avatar file input change
  handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ uploading: true });
      // Simulate an upload process (you should replace this with your actual upload logic)
      setTimeout(() => {
        // Update the avatar URL after the upload
        this.setState({ avatarUrl: URL.createObjectURL(file), uploading: false });
      }, 2000); // Simulating a 2-second upload process
    }
  };

  render() {
    const { showProfile, onClose } = this.props;
    const { avatarUrl, uploading } = this.state;

    const profileStyle = {
      display: showProfile ? 'block' : 'none',
      position: 'fixed',
      top: '10%',
      left: '18%',
      backgroundColor: '#fff',
      padding: '25px',
      borderRadius: '5px',
      boxShadow: '25px 25px 25px 25px rgba(0, 0, 0, 0.2)',
      zIndex: '1000',
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

    const closeButtonHoverStyle = {
      backgroundColor: 'darkblue', // Background color on hover
    };

    return (
      <div style={profileStyle}>
        <div className="profile-container">
          <h2>Profile  <FeatherIcons.User size={20} color="black" /></h2>
          <div className="avatar-container">
            {avatarUrl ? (
              <img src={avatarUrl} alt="Avatar" />
            ) : (
              <div className="avatar-placeholder">No Avatar</div>
            )}
          </div>
          {uploading ? (
            <div>Uploading...</div>
          ) : (
            <div>
              <input type="file" accept="image/*" onChange={this.handleAvatarChange} />
              <button
                onClick={() => {
                  // Clear the uploaded avatar
                  this.setState({ avatarUrl: '' });
                }}
              >
                Change Avatar
              </button>
            </div>
          )}
        </div>
        
        <h2>Details:</h2>
        <div>
            <label>Name:</label>
            <p>Mfumu Wealth Mabunda</p>
        </div>
        <div>
            <label>Email:</label>
            <p>mabunda.wealth@gmail.com</p>
        </div>
        <div>
            <label>Role:</label>
            <p>Front-end Engineer</p>
        </div>

        <button
          style={closeButtonStyle}
          onClick={() => {
            onClose();
            // Clear the uploaded avatar when closing the profile popup
            this.setState({ avatarUrl: '' });
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkblue')} // Apply hover style on mouse enter
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Close
        </button>
      </div>
    );
  }
}

export default ProfilePopup;

