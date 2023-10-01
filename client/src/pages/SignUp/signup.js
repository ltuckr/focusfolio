import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import styles from "./signup.module.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function Signup(props) {
  const [formState, setFormState] = useState({ username: "", email: "", password: "" });
  const [createUser] = useMutation(CREATE_USER);
  const [error, setError] = useState(null);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false); // New state for confirmation message
  const navigate = useNavigate(); // Initialize navigate from react-router-dom

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.username,
        },
      });

      if (data && data.createUser && data.createUser.token) {
        const token = data.createUser.token;
        Auth.login(token);
        setShowConfirmationMessage(true); // Show confirmation message on successful signup
      } else {
        setError("Authentication failed. Please try again.");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    if (showConfirmationMessage) {
      setTimeout(() => {

        navigate('/home'); // Navigate to the homepage after a delay
      }, 1000); // Adjust the delay time as needed
    }
  }, [showConfirmationMessage, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupText}>Sign Up</h2>
      <p className={styles.signupPar}>Create an account or log in</p>
      <input
        className={styles.signupInput}
        type="text"
        placeholder="Username"
        name="username"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        className={styles.signupInput}
        type="email"
        placeholder="Email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        className={styles.signupInput}
        type="password"
        placeholder="Password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />
      {error && (
        <div className={styles.signupError}>
          <p>{error}</p>
        </div>
      )}<<<<<<< feature/add-updates-clientside
      
      {showConfirmationMessage && (
  <div className={`${styles.signupConfirmation} ${styles.blackText}`}>
    <p>Thank you for signing up! Your account has been created.</p>
  </div>
)}

      <button onClick={handleFormSubmit} className={styles.signupBtn}>
        Sign Up
      </button>
    </div>
  );
}

export default Signup;