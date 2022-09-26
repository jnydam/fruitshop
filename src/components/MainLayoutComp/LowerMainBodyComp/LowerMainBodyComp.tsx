import React from "react";

import styles from "./LowerMainBodyComp.module.css";

const LowerMainBodyComp: React.FC = (props) => {
  return (
    <div className={styles.lowerMainBodyCompContainer}>
      <div className={styles.listGridViewTabContainer}>
        <button>List View</button>
        <button>Grid View</button>
      </div>
    </div>
  );
};

export default LowerMainBodyComp;
