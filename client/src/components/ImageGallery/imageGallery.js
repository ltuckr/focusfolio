import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import styles from "./imageGallery.module.css";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/mutations"; // Import the mutations from your file
import FavoriteButton from "../Favorite/FavoriteButton";

// Image data
const images = [
NB1Image,
NB2Image,
NB3Image,
NB4Image,
NB5Image,
NB6Image
];



const GalleryImgs = () => {
const [selectedImage, setSelectedImage] = useState(null);
const [isImageFavorited, setIsImageFavorited] = useState(false);
const [commentText, setCommentText] = useState("");


  const openModal = (image) => {
    setSelectedImage(image);
    setIsImageFavorited(false);
   
  };


  const [addFavorite] = useMutation(ADD_FAVORITE);
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);

const [addFavorite] = useMutation(ADD_FAVORITE);
const [removeFavorite] = useMutation(REMOVE_FAVORITE);


  const handleFavorite = async () => {
    try {
      if (!isImageFavorited) {
        // If not favorited, add the favorite
        await addFavorite({
          variables: {
            imageId: selectedImage.replace(/\.[^/.]+$/, ""), // Remove file extension from image name
          },
        });
      } else {
        // If already favorited, remove the favorite
        await removeFavorite({
          variables: {
            imageId: selectedImage.replace(/\.[^/.]+$/, ""), // Remove file extension from image name
          },
        });
      }

      setIsImageFavorited(!isImageFavorited); // Toggle the favorite status
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

return (
<div className={styles.gallery}>
{images.map((image, index) => (
<div key={index} className={styles.galleryItem}>
<div className={styles.imageContainer}>
<img
src={image}
alt={`Image ${index}`}
onClick={() => openModal(image)}
className={styles.imageItem}
/>


<FavoriteButton className={styles.favoriteButtonContainer}
imageUrl={image}
isFavorited={isImageFavorited}
onToggleFavorite={handleFavorite}
/>
</div>
</div>
))}
</div>
);
};

export default GalleryImgs;
