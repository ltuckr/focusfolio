import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations'; 
import Auth from '../../utils/auth'; 
import styles from "../Login/login.module.css";

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    const mutationResponse = await login({
      variables: { email: formState.email, password: formState.password },
    });
    const token = mutationResponse.data.login.token;
    Auth.login(token);
  } catch (e) {
    console.log(e);
  }
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormState({
    ...formState,
    [name]: value,
  });
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

export default Login;
