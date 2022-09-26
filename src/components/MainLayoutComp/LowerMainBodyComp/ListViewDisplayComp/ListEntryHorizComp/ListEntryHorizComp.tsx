import React from "react";
import Fruit from "../../../../../models/Fruit";

import styles from "./ListEntryHorizComp.module.css";

interface ListEntryHorizCompProps {
  singleFruitData: Fruit;
}

const ListEntryHorizComp: React.FC<ListEntryHorizCompProps> = (props) => {
  return (
    <div className={styles.listEntryHorizCompContainer}>
      <div className={styles.leftSideContainer}>
        <div className={styles.imageContainer}>
          <img
            alt="fruit"
            style={{
              height: "80%",
              borderRadius: "0.2rem",
              boxShadow: "0px 1px 3px grey",
            }}
            src={require(`../../../../../assets/${props.singleFruitData.image}.jpeg`)}
          ></img>
        </div>
        <div className={styles.nameContainer}>{props.singleFruitData.name}</div>
      </div>
      <div className={styles.rightSideAddCartContainer}>
        <span
          style={{
            marginRight: "0.7rem",
          }}
        >
          ${props.singleFruitData.price}
        </span>
        <button className={styles.addToCartButtonStyle}>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ListEntryHorizComp;
