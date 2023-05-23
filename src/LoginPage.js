

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './PagesStyling.css'


const LoginPage = () => {
    
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage]= useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if(inputValue.toLowerCase() === 'true') {
        navigate('/dashboard');
    } 
    else {
        setErrorMessage('Invalid input. Please enter "true" to log in.');
    }
  } ;


  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Log In</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
