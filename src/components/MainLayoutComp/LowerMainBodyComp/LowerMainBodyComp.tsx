import React, { useEffect, useState } from "react";
import FruitCardComp from "./FruitCardComp/FruitCardComp";

import styles from "./LowerMainBodyComp.module.css";

import axios from "axios";
import Fruit from "../../../models/Fruit";

const LowerMainBodyComp: React.FC = (props) => {
  const [fruitList, setFruitList] = useState<Fruit[]>([]);

  const numRows = Math.ceil(fruitList.length / 5);

  console.log(numRows);

  const rowArray = Array.from(Array(2).keys());

  console.log(rowArray);

  const convertListDataToDoubleArray: (rawFruitList: Fruit[]) => Fruit[][] = (
    rawFruitList
  ) => {
    const newDoubleFruitList: Fruit[][] = [];

    rawFruitList.forEach((fruit, index) => {
      const rowRemainder = Math.floor(index / 5);

      let internalList: Fruit[];

      if (newDoubleFruitList[rowRemainder] === undefined) {
        internalList = [];
        newDoubleFruitList[rowRemainder] = internalList;
      } else {
        internalList = newDoubleFruitList[rowRemainder];
      }

      internalList.push(fruit);
    });

    return newDoubleFruitList;
  };

  const finalDoubeList = convertListDataToDoubleArray(fruitList);

  console.log("This is the final double list");

  console.log(finalDoubeList);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_KEY
          ? process.env.REACT_APP_API_KEY
          : "http://localhost:8080/allfruits"
      )
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
        {rowArray.map((_, index) => (
          <div key={index} className={styles.fruitRowContainer}>
            <div className={styles.fruitBlockDividerContainer}>
              {finalDoubeList[index][0] && (
                <FruitCardComp
                  image={finalDoubeList[index][0].image}
                  name={finalDoubeList[index][0].name}
                  price={finalDoubeList[index][0].price}
                ></FruitCardComp>
              )}
            </div>
            <div className={styles.fruitBlockDividerContainer}>
              {finalDoubeList[index][1] && (
                <FruitCardComp
                  image={finalDoubeList[index][1].image}
                  name={finalDoubeList[index][1].name}
                  price={finalDoubeList[index][1].price}
                ></FruitCardComp>
              )}
            </div>
            <div className={styles.fruitBlockDividerContainer}>
              {finalDoubeList[index][2] && (
                <FruitCardComp
                  image={finalDoubeList[index][2].image}
                  name={finalDoubeList[index][2].name}
                  price={finalDoubeList[index][2].price}
                ></FruitCardComp>
              )}
            </div>
            <div className={styles.fruitBlockDividerContainer}>
              {finalDoubeList[index][3] && (
                <FruitCardComp
                  image={finalDoubeList[index][3].image}
                  name={finalDoubeList[index][3].name}
                  price={finalDoubeList[index][3].price}
                ></FruitCardComp>
              )}
            </div>
            <div className={styles.fruitBlockDividerContainer}>
              {finalDoubeList[index][4] && (
                <FruitCardComp
                  image={finalDoubeList[index][4].image}
                  name={finalDoubeList[index][4].name}
                  price={finalDoubeList[index][4].price}
                ></FruitCardComp>
              )}
            </div>
            {/* {finalDoubeList[index].map((fruitEntry, index) => (
              <FruitCardComp
                name={fruitEntry.name}
                price={fruitEntry.price}
                image={fruitEntry.image}
                key={index}
              ></FruitCardComp>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowerMainBodyComp;
