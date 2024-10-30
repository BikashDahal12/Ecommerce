
import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login'); // Toggle between Login and Sign Up
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(''); // Success/Error message

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for Login or Signup
  const handleSubmit = () => {
    const { name, email, password } = formData;

    if (action === 'Sign Up') {
      if (!name || !email || !password) {
        setMessage('Please fill all fields to sign up.');
        return;
      }
      setMessage(`Welcome, ${name}! You have signed up successfully.`);
      // Signup logic (e.g., API call) goes here
    } else {
      if (!email || !password) {
        setMessage('Please enter your email and password to log in.');
        return;
      }
      setMessage(`Hello, ${email}! You are now logged in.`);
      // Login logic (e.g., API call) goes here
    }

    // Clear form data after submission
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="container">
      {/* Header with buttons to toggle between Login and Sign Up */}
      <div className="header">
        <button
          className={`header-button ${action === 'Login' ? 'active' : ''}`}
          onClick={() => setAction('Login')}
        >
          Login
        </button>
        <button
          className={`header-button ${action === 'Sign Up' ? 'active' : ''}`}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </button>
      </div>

      <div className="inputs">
        {action === 'Sign Up' && (
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {action === 'Login' && (
        <div className="forgot-password">
          Lost password? <span>Click here!</span>
        </div>
      )}

      {message && <div className="message">{message}</div>}

      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>
          {action}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
