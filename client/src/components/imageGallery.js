import React, { useState } from "react";
import styles from "./imageGallery.module.css";
import image3 from "../assets/images/contactImage.jpg";
import image4 from "../assets/images/mainPageImg.jpg";
import image5 from "../assets/images/portrait1.jpg";
import image6 from "../assets/images/portrait2.jpg";
import image7 from "../assets/images/portrait3.jpg";
import image8 from "../assets/images/portrait4.jpg";

// image data
const images = [image3, image4, image5, image6, image7, image8];

export default function GalleryImgs() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.galleryItem}>
          <img
            src={image}
            alt={`Image ${index}`}
            onClick={() => openModal(image)}
          />
        </div>
      ))}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}

function Modal({ image, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <img src={image} alt="Modal" />
      </div>
    </div>
  );
}