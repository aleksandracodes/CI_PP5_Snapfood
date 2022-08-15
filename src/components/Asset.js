import React from "react";
import styles from "../styles/Asset.module.css";
import loading from "../assets/snapfood-loading.gif";

/*
  Multipurpose utility component with different props
  Display depends on the props passed
*/
const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <img src={loading} className={styles.spinner} alt="Loading..." />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Asset;
