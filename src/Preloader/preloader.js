
import styles from "./preloader.module.css";
import { useStaet, useEffect } from "react";

function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Preloader;
