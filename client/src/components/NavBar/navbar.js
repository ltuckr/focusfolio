import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/logo";
import styles from './navbar.module.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navTop}>
        <Logo />
      </div>
      <div className={styles.navBottom}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.navTools} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <NavLink to="/" className={styles.navNames}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={styles.navNames}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.navNames}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={styles.navNames}>
              Cart
            </NavLink>
          </li>
        </ul>
        <ul className={`${styles.navToolsRight} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <NavLink to="/login" className={styles.navNames}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={styles.navNames}>
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}