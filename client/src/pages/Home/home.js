import styles from "./home.module.css";
import img1 from "../../images/p1.jpg";
import img2 from "../../images/p2.jpg";
import img3 from "../../images/p3.jpg";
export default function Home() {
  return (
    <div>
      <div className={styles.carousel}>
        <ul className={styles.slides}>
          <input type="radio" name="radio-buttons" id={styles["img-1"]} defaultChecked />
          <li className={styles["slide-container"]}>
            <div className={styles["slide-image"]}>
              <img src={img1} alt="Image 1" />
            </div>
            <div className={styles["carousel-controls"]}>
              <label htmlFor={styles["img-3"]} className={styles["prev-slide"]}>
                <span>&lsaquo;</span>
              </label>
              <label htmlFor={styles["img-2"]} className={styles["next-slide"]}>
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id={styles["img-2"]} />
          <li className={styles["slide-container"]}>
            <div className={styles["slide-image"]}>
              <img src={img2} alt="Image 2" />
            </div>
            <div className={styles["carousel-controls"]}>
              <label htmlFor={styles["img-1"]} className={styles["prev-slide"]}>
                <span>&lsaquo;</span>
              </label>
              <label htmlFor={styles["img-3"]} className={styles["next-slide"]}>
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id={styles["img-3"]} />
          <li className={styles["slide-container"]}>
            <div className={styles["slide-image"]}>
              <img src={img3} alt="Image 3" />
            </div>
            <div className={styles["carousel-controls"]}>
              <label htmlFor={styles["img-2"]} className={styles["prev-slide"]}>
                <span>&lsaquo;</span>
              </label>
              <label htmlFor={styles["img-1"]} className={styles["next-slide"]}>
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className={styles["carousel-dots"]}>
            <label htmlFor={styles["img-1"]} className={styles["carousel-dot"]} id={styles["img-dot-1"]}></label>
            <label htmlFor={styles["img-2"]} className={styles["carousel-dot"]} id={styles["img-dot-2"]}></label>
            <label htmlFor={styles["img-3"]} className={styles["carousel-dot"]} id={styles["img-dot-3"]}></label>
          </div>
        </ul>
      </div>
    </div>
  );
}