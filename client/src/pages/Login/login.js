import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations'; // Adjust the path accordingly
import Auth from '../../utils/auth'; // Correct path provided
import styles from "../Login/login.module.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { error }] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      const { data } = await login({
        variables: { email, password },
      });

      const token = data.login.token;
      Auth.login(token);

      // Redirect or perform other actions after successful login
      // Example: history.push('/dashboard');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginText}>Login</h2>
      <p className={styles.loginPar}>Please login to your account</p>
      <input className={styles.loginInput}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className={styles.loginInput}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <p className={styles.errorText}>The provided credentials are incorrect</p>
      )}
      <button onClick={handleLogin} className={styles.loginBtn}>Login</button>
    </div>
  );
}
