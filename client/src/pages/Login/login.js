import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import styles from './login.module.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [login, { loading }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('handleFormSubmit called'); // Log to check if the function is called.
      const mutationResponse = await login({
        variables: { email, password },
      });
      console.log('mutationResponse:', mutationResponse); // Log the mutation response.
      const token = mutationResponse.data.login.token;
      console.log('Received token:', token); // Log the received token.
      Auth.login(token);
    } catch (e) {
      console.error('Error in handleFormSubmit:', e); // Log any errors.
      setError('The provided credentials are incorrect');
    }
  };

  console.log('Rendering Login component'); // Log when the component is rendered.

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
    </div>
  );
};

export default Login;
