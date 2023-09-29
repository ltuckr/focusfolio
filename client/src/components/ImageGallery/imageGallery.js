import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import styles from "./imageGallery.module.css";
import { CREATE_FAVORITE } from "../../utils/mutations";
import FavoriteButton from "../Favorite/FavoriteButton"; 

// Image Imports 
import B1Image from "../../images/B1.jpg";
import B2Image from "../../images/B2.jpg";
import B3Image from "../../images/B3.jpg";
import B4Image from "../../images/B4.jpg";
import K1Image from "../../images/K1.JPG";
import K2Image from "../../images/K2.JPG";
import K3Image from "../../images/K3.JPG";
import NB1Image from "../../images/NB1.JPG";
import NB2Image from "../../images/NB2.JPG";
import NB3Image from "../../images/NB3.JPG";
import NB4Image from "../../images/NB4.JPG";
import NB5Image from "../../images/NB5.JPG";

// Image data
const images = [
  B1Image,
  B2Image,
  B3Image,
  B4Image,
  K1Image,
  K2Image,
  K3Image,
  NB1Image,
  NB2Image,
  NB3Image,
  NB4Image,
  NB5Image,
];


const GalleryImgs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImagePurchased, setIsImagePurchased] = useState(false);
  const [isImageFavorited, setIsImageFavorited] = useState(false);
  const [commentText, setCommentText] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setIsImagePurchased(false);
    setIsImageFavorited(false);
    setCommentText("");
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const [createFavorite] = useMutation(CREATE_FAVORITE);

  const handleFavorite = async () => {
    try {
      await createFavorite({
        variables: {
          imageUrl: selectedImage,
        },
      });

      setIsImageFavorited(!isImageFavorited);
    } catch (error) {
      console.error("Error favoriting image:", error);
    }
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
          <FavoriteButton
            imageUrl={image}
            isFavorited={isImageFavorited}
            onToggleFavorite={handleFavorite}
          />
        </div>
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          images={images}
          isFavorited={isImageFavorited}
          setIsImageFavorited={setIsImageFavorited}
          onClose={closeModal}
          onFavorite={handleFavorite}
          commentText={commentText}
          onCommentTextChange={(e) => setCommentText(e.target.value)}
        />
      )}
    </div>
  );
};

export default GalleryImgs;

function Modal({
  image,
  images,
  isFavorited, // Receive isFavorited prop
  setIsImageFavorited, // Receive setIsImageFavorited prop
  onClose,
  onFavorite,
  commentText,
  onCommentTextChange,
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={image} alt="Enlarged Image" />
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <div className={styles.favoriteButton}>
          <FavoriteButton
            imageUrl={image}
            isFavorited={isFavorited} // Use isFavorited prop here
            onToggleFavorite={() => {
              onFavorite();
              setIsImageFavorited(!isFavorited); // Update isFavorited state
            }}
          />
        </div>
        {/* Add your comment input field here */}
        <textarea
          value={commentText}
          onChange={onCommentTextChange}
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
}

