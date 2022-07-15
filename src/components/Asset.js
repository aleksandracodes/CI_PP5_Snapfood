import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="grow" variant="secondary" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Asset;