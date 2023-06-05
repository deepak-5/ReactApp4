import React, { useState } from 'react';
import './Login.css'

const LoginSignupPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login or signup logic here
    if (isLogin) {
      // Perform login
      const loginData = {
        email,
        password,
      };

      fetch('https://mortgageautomationgroupa.azurewebsites.net/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Login successful!', data);
          // Reset form fields
          setEmail('');
          setPassword('');
          setIsLoggedIn(true); // Set isLoggedIn to true after successful login
        })
        .catch((error) => {
          console.error('Error logging in:', error);
          setErrorMessage('Invalid email or password'); // Display error message
        });
    } else {
      // Perform signup
      const signupData = {
        id: generateRandomId(), // Randomly generated id
        email,
        username,
        password,
      };

      fetch('https://mortgageautomationgroupa.azurewebsites.net/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Signup successful!', data);
          alert(signupData.id,+'is your id save it for further use')
          // Reset form fields
          setEmail('');
          setUsername('');
          setPassword('');
          setIsLoggedIn(true); // Set isLoggedIn to true after successful signup
        })
        .catch((error) => {
          console.error('Error signing up:', error);
          setErrorMessage('Error occurred during signup'); // Display error message
        });
    }
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 100000);
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {!isLogin && (
          <>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </>
        )}

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginSignupPage;
