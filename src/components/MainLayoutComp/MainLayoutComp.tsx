import React from "react";
import LowerMainBodyComp from "./LowerMainBodyComp/LowerMainBodyComp";

import styles from "./MainLayoutComp.module.css";
import UpperFruitHeaderComp from "./UpperFruitHeaderComp/UpperFruitHeaderComp";

const MainLayoutComp: React.FC = (props) => {
  return (
    <div className={styles.mainLayoutCompContainer}>
      <UpperFruitHeaderComp></UpperFruitHeaderComp>
      <LowerMainBodyComp></LowerMainBodyComp>
    </div>
  );
};

export default MainLayoutComp;
