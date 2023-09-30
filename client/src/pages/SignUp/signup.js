import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from '../../utils/mutations'; 
import Auth from '../../utils/auth'; 
import styles from "../SignUp/signup.module.css";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* Display username error */}
      {error && error.graphQLErrors[0] && error.graphQLErrors[0].extensions.exception.errors.username && (
        <span className={styles.signupError}>{error.graphQLErrors[0].extensions.exception.errors.username}</span>
      )}
      <input
        className={styles.signupInput}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Display email error */}
      {error && error.graphQLErrors[0] && error.graphQLErrors[0].extensions.exception.errors.email && (
        <span className={styles.signupError}>{error.graphQLErrors[0].extensions.exception.errors.email}</span>
      )}
      <input
        className={styles.signupInput}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Display password error */}
      {error && error.graphQLErrors[0] && error.graphQLErrors[0].extensions.exception.errors.password && (
        <span className={styles.signupError}>{error.graphQLErrors[0].extensions.exception.errors.password}</span>
      )}
      <button onClick={handleSignup} className={styles.signupBtn}>
        Sign Up
      </button>
    </div>
  );
}

export default signup;