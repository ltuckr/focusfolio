import React, { useState } from "react";
import styles from "./imageGallery.module.css";
import B1Image from "../images/B1.jpg";
import B2Image from "../images/B2.jpg";
import B3Image from "../images/B3.jpg";
import B4Image from "../images/B4.jpg";
import K1Image from "../images/K1.JPG";
import K2Image from "../images/K2.JPG";
import K3Image from "../images/K3.JPG";
import NB1Image from "../images/NB1.JPG";
import NB2Image from "../images/NB2.JPG";
import NB3Image from "../images/NB3.JPG";
import NB4Image from "../images/NB4.JPG";
import NB5Image from "../images/NB5.JPG";

// image data
const images = [B1Image, B2Image, B3Image, B4Image, K1Image, K2Image, K3Image, NB1Image, NB2Image, NB3Image, NB4Image, NB5Image];

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