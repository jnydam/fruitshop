import React from "react";
import LowerMainBodyComp from "./LowerMainBodyComp/LowerMainBodyComp";

import styles from "./MainLayoutComp.module.css";
import UpperFruitHeaderComp from "./UpperFruitHeaderComp/UpperFruitHeaderComp";

import applePic from "../../assets/appleimage.jpeg";

const MainLayoutComp: React.FC = (props) => {
  return (
    <React.Fragment>
      <div className={styles.mainLayoutCompContainer}>
        <UpperFruitHeaderComp></UpperFruitHeaderComp>
        <LowerMainBodyComp></LowerMainBodyComp>
      </div>
      <div className={styles.mobileMainLayoutCompContainer}>
        <div className={styles.mobileComingSoonContainer}>
          <div className={styles.imageContainer}>
            <img
              alt="intro apple pic"
              style={{
                height: "80%",
                borderRadius: "0.2rem",
                boxShadow: "0px 1px 3px grey",
              }}
              src={applePic}
            ></img>
          </div>
          <span
            style={{
              textAlign: "center",
              width: "80%",
              marginBottom: "1rem",
            }}
          >
            Thank you so much for visiting the FruitShop!
          </span>
          <span
            style={{
              textAlign: "center",
              width: "80%",
            }}
          >
            Mobile UI is still a work in progress but view this application on
            desktop or resize this screen just a little wider to see some
            delicious fruit!
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayoutComp;
