import React from "react";

import styles from "./MainLayoutComp.module.css";

const MainLayoutComp: React.FC = (props) => {
  return (
    <div className={styles.mainLayoutCompContainer}>
      <span>This is the main layout comp</span>
    </div>
  );
};

export default MainLayoutComp;
