import { useState } from "react";
import styles from "./contact.module.css";
import img1 from "../images/contactImage.jpg"


export default function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        message: '',
    };
    
    const [formData, setFormData] = useState({ ...initialFormData });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
    
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        } else {
          newErrors.name = '';
        }
    
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
          newErrors.email = 'Enter a valid email address';
          valid = false;
        } else {
          newErrors.email = '';
        }
    
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required';
          valid = false;
        } else {
          newErrors.message = '';
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
            // Form is valid, you can submit the data or perform an action here
        console.log('Form data:', formData);
        // Clear input fields
              setFormData({ ...initialFormData });
            } else {
              // Form has validation errors
              console.log('Form has validation errors');
            }
          };
        
          return (
      
      <div className={styles.contactContainer}>
               <div className={styles.contactCard}>
                  <div className={styles.contactCardBody}>
                   <img src={img1} className={styles.contactCardImg} />
                      <h2 className={styles.contactCardTitle}>Name of the Artist</h2>
                      <p className={styles.contactCardPar}> Biography. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
             </div>
      
            <div className={styles.formBox}>
              <h2 className={styles.formText}>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  {/* <label htmlFor="name">Name:</label> */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name here"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    {errors.name && <span className={styles.contactError}>{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="email">Email:</label> */}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className={styles.contactError}>{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="message">Message:</label> */}
                    <textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="your message here..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className={styles.contactError}>{errors.message}</span>}
                  </div>
                  <button type="submit" className={styles.formBtn}>Submit</button>
                </form>
              </div>
            </div>
            );
          }