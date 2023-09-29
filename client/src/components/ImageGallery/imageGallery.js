import React, { useState } from "react";
import styles from "./imageGallery.module.css";
import { QUERY_PURCHASES, QUERY_FAVORITES, QUERY_COMMENTS } from "../utils/queries";

// Image Imports
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
  const [isImagePurchased, setIsImagePurchased] = useState(false); // Track if the image is purchased
  const [isImageFavorited, setIsImageFavorited] = useState(false); // Track if the image is favorited
  const [commentText, setCommentText] = useState(""); // Store the comment text

  const openModal = (image) => {
    setSelectedImage(image);
    setIsImagePurchased(false); // Reset the purchase status when the modal is opened
    setIsImageFavorited(false); // Reset the favorite status when the modal is opened
    setCommentText(""); // Reset the comment text when the modal is opened
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handlePurchase = () => {
    // Implement logic to handle the purchase action (e.g., make an API request)
    // Update the isImagePurchased state accordingly
    setIsImagePurchased(true);
  };

  const handleFavorite = () => {
    // Implement logic to handle the favorite action (e.g., make an API request)
    // Update the isImageFavorited state accordingly
    setIsImageFavorited(!isImageFavorited); // Toggle the favorite status
  };

  const handleComment = () => {
    // Implement logic to handle the comment action (e.g., make an API request)
    
    console.log(`Comment added: ${commentText}`);
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
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={closeModal}
          onPurchase={handlePurchase}
          isPurchased={isImagePurchased}
          onFavorite={handleFavorite}
          isFavorited={isImageFavorited}
          commentText={commentText}
          onComment={handleComment}
          onCommentTextChange={(e) => setCommentText(e.target.value)}
        />
      )}
    </div>
  );
}

function Modal({
  image,
  onClose,
  onPurchase,
  isPurchased,
  onFavorite,
  isFavorited,
  commentText,
  onComment,
  onCommentTextChange,
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <img src={image} alt="Modal" />

        {/* Purchase Button */}
        <button onClick={onPurchase} disabled={isPurchased}>
          {isPurchased ? "Purchased" : "Purchase"}
        </button>

        {/* Favorite Button */}
        <button onClick={onFavorite}>
          {isFavorited ? "Unfavorite" : "Favorite"}
        </button>

        {/* Comment Input and Button */}
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={onCommentTextChange}
        />
        <button onClick={onComment}>Add Comment</button>
      </div>
    </div>
  );
}