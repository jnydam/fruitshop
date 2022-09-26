import React from "react";
import FruitCardComp from "./FruitCardComp/FruitCardComp";

import styles from "./LowerMainBodyComp.module.css";

const LowerMainBodyComp: React.FC = (props) => {
  return (
    <div className={styles.lowerMainBodyCompContainer}>
      <div className={styles.listGridViewTabContainer}>
        <button className={styles.listGridButtonStyle}>List View</button>
        <button className={styles.listGridButtonStyle}>Grid View</button>
      </div>
      <div className={styles.lowerFruitCardGridContainer}>
        <FruitCardComp></FruitCardComp>
        <FruitCardComp></FruitCardComp>
        <FruitCardComp></FruitCardComp>
        <FruitCardComp></FruitCardComp>
        <FruitCardComp></FruitCardComp>
        <FruitCardComp></FruitCardComp>
        <FruitCardComp></FruitCardComp>
        <FruitCardComp></FruitCardComp>
      </div>
    </div>
  );
};

export default LowerMainBodyComp;
