import React from "react";

import styles from "./FruitCardComp.module.css";

import lemonPicWhite from "../../../../assets/lemonpicwhite.jpeg";

const FruitCardComp: React.FC = (props) => {
  return (
    <div className={styles.fruitCardCompContainer}>
      <div className={styles.upperCardContainer}>
        <div className={styles.fruitTitleContainer}>
          <span>Apple</span>
        </div>
        <div className={styles.fruitImageContainer}>
          <img
            alt="lemon white"
            style={{
              borderRadius: "0.2rem",
              height: "100%",
            }}
            src={lemonPicWhite}
          ></img>
        </div>
        <div className={styles.priceLabelContainer}>
          <span>Price: $3.99</span>
        </div>
      </div>
      <div className={styles.lowerButtonContainer}>
        <button className={styles.addToCartButtonStyle}>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default FruitCardComp;
