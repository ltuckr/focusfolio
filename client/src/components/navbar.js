import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navTop}><Logo />
        <ul className={styles.navTopRight}>
        <li>
            <NavLink to="/cart" className={styles.navTopNames}>Cart
            </NavLink>
          </li>
        </ul>
        </div >
        <div className ={styles.navBottom}>
        <ul className={styles.navTools}>
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
          
        </ul>
        <ul className={styles.navToolsRight}>
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
    </>
  );
}