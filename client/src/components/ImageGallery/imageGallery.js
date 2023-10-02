import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import styles from "./imageGallery.module.css";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/mutations";
import FavoriteButton from "../Favorite/FavoriteButton";
import { QUERY_IMAGES } from "../../utils/queries"; // Import the GraphQL query for fetching images

const GalleryImgs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageFavorited, setIsImageFavorited] = useState(false);


  // Fetch images using the GraphQL query
  const { loading, error, data } = useQuery(QUERY_IMAGES);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsImageFavorited(false);
  };

  const [addFavorite] = useMutation(ADD_FAVORITE);
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);

  const handleFavorite = async () => {
    try {
      if (!isImageFavorited) {
        // If not favorited, add the favorite
        await addFavorite({
          variables: {
            imageId: selectedImage.id, // Assuming you have an 'id' field in your image data
          },
        });
      } else {
        // If already favorited, remove the favorite
        await removeFavorite({
          variables: {
            imageId: selectedImage.id,
          },
        });
      }

      setIsImageFavorited(!isImageFavorited); // Toggle the favorite status
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.gallery}>
      {data.images.map((image) => (
        <div key={image.id} className={styles.galleryItem}>
          <div className={styles.imageContainer}>
            <img
              src={image.imageUrl}
              alt={image.title}
              onClick={() => openModal(image)}
              className={styles.imageItem}
            />
            <FavoriteButton
              className={styles.favoriteButtonContainer}
              imageUrl={image.imageUrl}
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
