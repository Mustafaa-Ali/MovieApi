import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!isValidEmail(event.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length >= 8) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be at least 8 characters long.');
    }
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]{3}@[a-zA-Z0-9.-]{4}\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail" className="mx-auto">
        <Form.Label style={{ color: 'white' }}>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          isInvalid={emailError !== ''}
          style={{ width: '30%', margin:'auto' }}
        />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mx-auto">
        <Form.Label style={{ color: 'white' }}>Password:</Form.Label>
        <div className="input-group" style={{ width: '30%', margin:'auto' }}>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            isInvalid={passwordError !== ''}
            
          />
          <Button
            variant="outline-secondary"
            onClick={handleShowPasswordChange}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </div>
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group><br />

      <Button variant="primary" type="submit" className="mx-auto">
        Log In
      </Button>
    </Form>
  );
}

export default LoginForm;
