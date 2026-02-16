import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

import styles from "./PageNotFound.module.css";

import image from "../assets/404.jpg";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <img src={image} alt="404!" className={styles.image} />
      <Link to="/products" className={styles.button}>
        <FaArrowLeftLong />
        <span>Back to shop</span>
      </Link>
    </div>
  );
}

export default PageNotFound;
