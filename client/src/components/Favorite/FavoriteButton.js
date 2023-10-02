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

  
  const iconStyle = {
    fontSize: iconSize || "30px", 
    color: isFavorited ? "red" : "white", // Change color based on favorited status
    position: "absolute",
    bottom: "30px", 
   left: "30px",
    zIndex: 1,
    cursor: "pointer",
  };

  return (
    <div style={{ position: "relative" }}>
      <FontAwesomeIcon icon={faHeart} style={iconStyle} onClick={handleClick} />
    </div>
  );
};

export default FavoriteButton;
