import React from "react";
import InnerHeaderComp from "./InnerHeaderComp/InnerHeaderComp";

import styles from "./UpperFruitHeaderComp.module.css";

const UpperFruitHeaderComp: React.FC = (props) => {
  return (
    <div className={styles.upperFruitHeaderCompContainer}>
      <InnerHeaderComp></InnerHeaderComp>
    </div>
  );
};

export default UpperFruitHeaderComp;
