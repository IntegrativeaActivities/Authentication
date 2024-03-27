import './App.css';
import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!newEmail.includes('@')) {
      setEmailError('Email must contain "@" symbol');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/.test(newPassword)) {
      setPasswordStrength('');
      setPasswordError('Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long');

    } else {
      setPasswordError('');
      if (newPassword.length < 7) {
        setPasswordStrength('Weak');
      } else if (newPassword.length < 8) {
        setPasswordStrength('Medium');
      } else {
        setPasswordStrength('Strong');
      }
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
  <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="email1" value="Your email" />
    </div>
    <TextInput id="email1" type="email" placeholder="name@flowbite.com" 
    value={email}
    onChange={handleEmailChange}
    required/>
    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="password1" value="Your password" />
    </div>
    <TextInput id="password1" type="password" 
    value={password}
    onChange={handlePasswordChange}
    required
    />
    {passwordStrength && <p>Password Strength: {passwordStrength}</p>}
    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="password2" value="Confirm password" />
    </div>
    <TextInput id="password2" type="password"
    value={confirmPassword}
    onChange={handleConfirmPasswordChange}
    required
    />
    {confirmPassword !== password && <p style={{ color: 'red' }}>Passwords do not match</p>}
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">Remember me</Label>
  </div>
  <Button type="submit">Submit</Button>
  </form>
  );
};

export default Authentication;
