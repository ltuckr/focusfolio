import React, { useState } from "react";
import styles from "./signup.module.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = () => {
    console.log("Signing up with:", username, email, password);

    // Reset previous errors
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    // Clear input fields
    setUsername("");
    setEmail("");
    setPassword("");

    // Validate username
    if (!username) {
      setUsernameError("Username is required");
    }

    // Validate email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
    }

    // Validate password
    if (!password || password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    }

    // If there are no errors, proceed with signup
    if (!usernameError && !emailError && !passwordError) {
      console.log("Signing up with:", username, email, password);
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
      {usernameError && (
        <span className={styles.signupError}>{usernameError}</span>
      )}
      <input
        className={styles.signupInput}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <span className={styles.signupError}>{emailError}</span>}
      <input
        className={styles.signupInput}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && (
        <span className={styles.signupError}>{passwordError}</span>
      )}
      <button onClick={handleSignup} className={styles.signupBtn}>
        Sign Up
      </button>
    </div>
  );
}