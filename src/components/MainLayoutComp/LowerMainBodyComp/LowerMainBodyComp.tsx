import React, { useEffect, useState } from "react";
import FruitCardComp from "./FruitCardComp/FruitCardComp";

import styles from "./LowerMainBodyComp.module.css";

import axios from "axios";
import Fruit from "../../../models/Fruit";

const LowerMainBodyComp: React.FC = (props) => {
  const [fruitList, setFruitList] = useState<Fruit[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allfruits")
      .then((res) => {
        setFruitList(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={styles.lowerMainBodyCompContainer}>
      <div className={styles.listGridViewTabContainer}>
        <button
          style={{
            boxShadow: "0px 1px 3px grey",
            marginLeft: "1rem",
          }}
          className={styles.listGridButtonStyle}
        >
          List View
        </button>
        <button
          style={{
            boxShadow: "0px 1px 3px grey",
            marginLeft: "1rem",
          }}
          className={styles.listGridButtonStyle}
        >
          Grid View
        </button>
      </div>
      <div className={styles.lowerFruitCardGridContainer}>
        {fruitList &&
          fruitList.map((givenFruit, index) => (
            <FruitCardComp
              name={givenFruit.name}
              price={givenFruit.price}
              image={givenFruit.image}
              key={index}
            ></FruitCardComp>
          ))}
      </div>
    </div>
  );
};

export default LowerMainBodyComp;
