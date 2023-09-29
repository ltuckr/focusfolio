import React from "react";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CREATE_FAVORITE } from "../../utils/mutations";
function FavoriteButton({ userId, imageUrl, isFavorited, onToggleFavorite }) {
    const [createFavorite] = useMutation(CREATE_FAVORITE);
  
    const handleFavorite = async () => {
      try {
        // Call the GraphQL mutation to create or remove a favorite
        const response = await createFavorite({
          variables: {
            userId: userId,
            imageUrl: imageUrl,
          },
        });
  
        // Check the response to determine if the image was favorited or unfavorited
        const { data } = response;
        const isCurrentlyFavorited = data?.createFavorite?.isFavorited;
  
        // Notify the parent component about the favorite status change
        onToggleFavorite(isCurrentlyFavorited);
      } catch (error) {
        console.error("Error favoriting image:", error);
      }
    };
  
    return (
      <button onClick={handleFavorite}>
        {isFavorited ? (
          <FontAwesomeIcon icon={faHeart} color="red" />
        ) : (
          <FontAwesomeIcon icon={faHeart} color="gray" />
        )}
      </button>
    );
  }
  
  export default FavoriteButton;
  
