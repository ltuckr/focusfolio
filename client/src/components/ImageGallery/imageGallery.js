import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import styles from "./imageGallery.module.css";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/mutations";
import { QUERY_IMAGES } from "../../utils/queries"; // Import the GraphQL query for fetching images
import FavoriteButton from "../../components/Favorite/FavoriteButton";

const GalleryImgs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageFavorited, setIsImageFavorited] = useState({}); // Use an object to track favorites for each image

  // Fetch images using the GraphQL query
  const { loading, error, data } = useQuery(QUERY_IMAGES);

  // Define the addFavorite and removeFavorite mutations
  const [addFavorite] = useMutation(ADD_FAVORITE);
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);

  // Handle favorite/unfavorite for a specific image
  const handleFavorite = async (imageId) => {
    try {
      const isCurrentlyFavorited = isImageFavorited[imageId] || false;

      if (!isCurrentlyFavorited) {
        // If not favorited, add the favorite
        await addFavorite({
          variables: {
            imageId,
          },
        });
      } else {
        // If already favorited, remove the favorite
        await removeFavorite({
          variables: {
            imageId,
          },
        });
      }

      // Toggle the favorite status for the clicked image
      setIsImageFavorited((prev) => ({
        ...prev,
        [imageId]: !isCurrentlyFavorited,
      }));
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
              onClick={() => handleFavorite(image.id)} // Pass the image id to handleFavorite
              className={styles.imageItem}
            />
            <FavoriteButton
                className={styles.favoriteButtonContainer}
                imageUrl={image.imageUrl}
                isFavorited={isImageFavorited[image.id] || false}
                onToggleFavorite={() => handleFavorite(image.id)} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryImgs;


