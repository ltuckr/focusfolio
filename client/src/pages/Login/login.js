import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const navigate = useNavigate();

  const [login, { loading }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('handleFormSubmit called');
      const mutationResponse = await login({
        variables: { email, password },
      });
      console.log('mutationResponse:', mutationResponse);
      const token = mutationResponse.data.login.token;
      console.log('Received token:', token);
      Auth.login(token);
      setShowWelcomeMessage(true);
    } catch (e) {
      console.error('Error in handleFormSubmit:', e);
      setError('The provided credentials are incorrect');
    }
  };

  useEffect(() => {
    if (showWelcomeMessage) {
      setTimeout(() => {
        navigate('/home'); // Navigate to the homepage after a delay (e.g., 2 seconds)
      }, 2000); // Adjust the delay time as needed
    }
  }, [showWelcomeMessage, navigate]);

  console.log('Rendering Login component');

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginText}>Login</h2>
      <p className={styles.loginPar}>Please login to your account</p>

      <input
        className={styles.loginInput}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className={styles.loginInput}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className={styles.errorText}>{error}</p>}
      <button
        onClick={handleFormSubmit}
        className={styles.loginBtn}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {showWelcomeMessage && (
        <div className={`${styles.welcomeMessage} ${styles.blackText}`}>
          <p>Welcome! You have successfully logged in.</p>
        </div>
      )}
    </div>
  );
};

export default Login;
