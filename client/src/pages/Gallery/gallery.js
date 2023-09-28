import styles from "./gallery.module.css";
import GalleryImgs from '../../components/ImageGallery/imageGallery.js'

export default function Gallery(){
    return(
        <>
        <h1>Client Gallery Images</h1>
        <GalleryImgs />
        </>
    )
}