import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import styles from "./imageGallery.module.css";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/mutations"; // Import the mutations from your file
import FavoriteButton from "../Favorite/FavoriteButton";


<<<<<<< HEAD
// Image Imports 
import NB1Image from "../../images/NB1.JPG";
import NB2Image from "../../images/NB2.JPG";
import NB3Image from "../../images/NB3.JPG";
import NB4Image from "../../images/NB4.JPG";
import NB5Image from "../../images/NB5.JPG";
=======
// Image Imports
import NB1Image from "../../images/NB1.jpg";
import NB2Image from "../../images/NB2.jpg";
import NB3Image from "../../images/NB3.jpg";
import NB4Image from "../../images/NB4.jpg";
import NB5Image from "../../images/NB5.jpg";
>>>>>>> caef96af3fd2460f3ffdbe44d7b32e390f58c8ab
import NB6Image from "../../images/NB6.jpg";


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
setCommentText("");
};


const closeModal = () => { //modal issue?
setSelectedImage(null);
};


const [addFavorite] = useMutation(ADD_FAVORITE);
const [removeFavorite] = useMutation(REMOVE_FAVORITE);


const handleFavorite = async () => {
try {
if (!isImageFavorited) {
// If not favorited, add the favorite
await addFavorite({
variables: {
imageId: selectedImage,
},
});
} else {
// If already favorited, remove the favorite
await removeFavorite({
variables: {
imageId: selectedImage,
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
