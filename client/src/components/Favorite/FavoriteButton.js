import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FavoriteButton = ({ isFavorited, onToggleFavorite, iconSize }) => {
  const handleClick = (event) => {
    // Prevent the click event from propagating to the parent elements (e.g., the image)
    event.stopPropagation();
    
    // Toggle the favorite status by passing the opposite of the current 'isFavorited' value.
    onToggleFavorite(!isFavorited);
  };

  // Define a style object to customize the icon's size and color
  const iconStyle = {
    fontSize: iconSize || "30px", // Default size is 24px
    color: isFavorited ? "red" : "white", // Change color based on favorited status
    position: "absolute",
    bottom: "20px", // Adjust the top position to move the icon higher
    right: "30px", // Adjust the left position to move the icon to the left
    zIndex: 1, // Ensure the icon is above the image
    cursor: "pointer", // Add pointer cursor to indicate clickability
  };

  return (
    <div style={{ position: "relative" }}>
      <FontAwesomeIcon icon={faHeart} style={iconStyle} onClick={handleClick} />
    </div>
  );
};

export default FavoriteButton;
