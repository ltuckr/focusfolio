import React from "react";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/mutations"; // Updated import statements
import styles from "../ImageGallery/imageGallery.module.css";


function FavoriteButton({ userId, imageUrl, isFavorited, onToggleFavorite }) {
const [addFavorite] = useMutation(ADD_FAVORITE);
const [removeFavorite] = useMutation(REMOVE_FAVORITE);


const handleFavorite = async () => {
try {
if (!isFavorited) {
// If not favorited, add the favorite
await addFavorite({
variables: {
imageId: imageUrl,
},
});
} else {
// If already favorited, remove the favorite
await removeFavorite({
variables: {
imageId: imageUrl,
},
});
}


// Notify the parent component about the favorite status change
onToggleFavorite(!isFavorited);
} catch (error) {
console.error("Error toggling favorite:", error);
}
};


return (
<button onClick={handleFavorite} className={styles.favoriteButtonContainer} >
{isFavorited ? (
<FontAwesomeIcon icon={faHeart} color="red" />
) : (
<FontAwesomeIcon icon={faHeart} color="white" />
)}
</button>
);
}


export default FavoriteButton;
