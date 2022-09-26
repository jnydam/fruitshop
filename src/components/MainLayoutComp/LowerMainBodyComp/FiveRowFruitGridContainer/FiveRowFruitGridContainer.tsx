import React from "react";
import Fruit from "../../../../models/Fruit";
import FruitCardComp from "../FruitCardComp/FruitCardComp";

import styles from "./FiveRowFruitGridContainer.module.css";

interface FiveRowFruitGridContainerProps {
  rowArray: number[];
  finalDoubeList: Fruit[][];
}

const FiveRowFruitGridContainer: React.FC<FiveRowFruitGridContainerProps> = (
  props
) => {
  return (
    <div className={styles.lowerFruitCardGridContainer}>
      {props.rowArray &&
        props.rowArray.map((_, index) => (
          <div key={index} className={styles.fruitRowContainer}>
            <div className={styles.fruitBlockDividerContainer}>
              {props.finalDoubeList[index][0] && (
                <FruitCardComp
                  image={props.finalDoubeList[index][0].image}
                  name={props.finalDoubeList[index][0].name}
                  price={props.finalDoubeList[index][0].price}
                ></FruitCardComp>
              )}
            </div>
            <div className={styles.fruitBlockDividerContainer}>
              {props.finalDoubeList[index][1] && (
                <FruitCardComp
                  image={props.finalDoubeList[index][1].image}
                  name={props.finalDoubeList[index][1].name}
                  price={props.finalDoubeList[index][1].price}
                ></FruitCardComp>
              )}
            </div>
            <div className={styles.fruitBlockDividerContainer}>
              {props.finalDoubeList[index][2] && (
                <FruitCardComp
                  image={props.finalDoubeList[index][2].image}
                  name={props.finalDoubeList[index][2].name}
                  price={props.finalDoubeList[index][2].price}
                ></FruitCardComp>
              )}
            </div>
            <div className={styles.fruitBlockDividerContainer}>
              {props.finalDoubeList[index][3] && (
                <FruitCardComp
                  image={props.finalDoubeList[index][3].image}
                  name={props.finalDoubeList[index][3].name}
                  price={props.finalDoubeList[index][3].price}
                ></FruitCardComp>
              )}
            </div>
            <div className={styles.fruitBlockDividerContainer}>
              {props.finalDoubeList[index][4] && (
                <FruitCardComp
                  image={props.finalDoubeList[index][4].image}
                  name={props.finalDoubeList[index][4].name}
                  price={props.finalDoubeList[index][4].price}
                ></FruitCardComp>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default FiveRowFruitGridContainer;
