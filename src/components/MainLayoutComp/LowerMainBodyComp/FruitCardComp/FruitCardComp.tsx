import React from "react";

import styles from "./FruitCardComp.module.css";

interface FruitCardCompProps {
  name: string;
  price: number;
  image: string;
}

const FruitCardComp: React.FC<FruitCardCompProps> = (props) => {
  return (
    <div className={styles.fruitCardCompContainer}>
      <div className={styles.upperCardContainer}>
        <div className={styles.fruitTitleContainer}>
          <span>{props.name}</span>
        </div>
        <div className={styles.fruitImageContainer}>
          <img
            alt="lemon white"
            style={{
              borderRadius: "0.2rem",
              height: "100%",
              boxShadow: "0px 1px 3px grey",
            }}
            src={require(`../../../../assets/${props.image}.jpeg`)}
          ></img>
        </div>
        <div className={styles.priceLabelContainer}>
          <span>Price: ${props.price}</span>
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
