import React, { Component } from 'react';

class SupportPopup extends Component {
  // FAQ data
  faqData = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by visiting the "Forgot Password" page on our website and following the instructions provided.'
    },
    {
      question: 'Where can I find user guides and tutorials?',
      answer: 'You can access user guides and tutorials in the "Resources" section of your dashboard. We have comprehensive guides to help you get started.'
    },
    {
      question: 'What should I do if I encounter an issue with the system?',
      answer: 'If you encounter any issues or need technical assistance, please contact our support team via email or phone, and we will be happy to assist you.'
    }
  ];

  render() {
    const { showSupport, onClose } = this.props;

    const supportStyle = {
      display: showSupport ? 'block' : 'none',
      position: 'fixed',
      top: '10%',
      left: '16.5%',
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
      backgroundColor: 'darkblue', 
    };

    return (
      <div style={supportStyle}>
        <div className="support-container">
          <h2>Support</h2>
          <p>
            Contact our support team:
          </p>
          <ul>
            <li>Email: <a href="mailto:support@chronologix.com">support@chronologix.com</a></li>
            <li>Phone: <a href="tel:+123456789">+1 (234) 567-89</a></li>
          </ul>

          <h3>Frequently Asked Questions:</h3>
          <ul>
            {this.faqData.map((faqItem, index) => (
              <li key={index}>
                <strong>{faqItem.question}</strong>
                <p>{faqItem.answer}</p>
              </li>
            ))}
          </ul>

          <p>
            For more information and resources, you can visit our <a href="#">Help Center</a>.
          </p>
        </div>
        <button
          style={closeButtonStyle}
          onClick={onClose}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkblue')} // Apply hover style on mouse enter
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Close
        </button>
      </div>
    );
  }
}

export default SupportPopup;
