import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from '../../utils/mutations'; // Adjust the path accordingly
import Auth from '../../utils/auth'; // Import your authentication module if needed
import styles from "../SignUp/signup.module.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [createUser, { error }] = useMutation(CREATE_USER); // Use createUser mutation
  
  const handleSignup = async () => {
    try {
      const { data } = await createUser({
        variables: { username, email, password },
      });

      // Assuming your server returns a token upon successful signup
      const token = data.createUser.token;
      
      // Perform login logic with the token using your Auth module
      Auth.login(token);

      // Redirect or perform other actions after successful signup
      // Example: history.push('/dashboard');
    } catch (e) {
      console.error(e);
    }
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
