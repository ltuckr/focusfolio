import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
            focusfolio 
        </p>
        <div className={styles.footerLinks}>
        <a href="https://github.com/ltuckr/focusfolio" className={styles.footerLink}>
        About Us
        </a>
        <a href="https://github.com/ltuckr/focusfolio" className={styles.footerLink}>
        Contact Us
        </a>
        </div>
      </div>
    </footer>
  );
}