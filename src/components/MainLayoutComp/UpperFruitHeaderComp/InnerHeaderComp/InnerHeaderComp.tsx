import React from "react";

import styles from "./InnerHeaderComp.module.css";

const InnerHeaderComp: React.FC = (props) => {
  return (
    <div className={styles.innerHeaderCompContainer}>
      <div className={styles.leftSideContainer}>
        <button className={styles.headerButtonStyle}>Fruits</button>
        <button className={styles.headerButtonStyle}>Sell an item</button>
      </div>
      <div className={styles.checkoutButtonContainer}>
        <span>Checkout (1)</span>
      </div>
    </div>
  );
};

export default InnerHeaderComp;
