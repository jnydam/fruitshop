import React, { useEffect, useState } from "react";
import FruitCardComp from "./FruitCardComp/FruitCardComp";

import styles from "./LowerMainBodyComp.module.css";

import axios from "axios";
import Fruit from "../../../models/Fruit";
import FiveRowFruitGridContainer from "./FiveRowFruitGridContainer/FiveRowFruitGridContainer";
import FourRowFruitGridContainer from "./FourRowFruitGridContainer/FourRowFruitGridContainer";
import GridViewDisplayComp from "./GridViewDisplayComp/GridViewDisplayComp";
import ListViewDisplayComp from "./ListViewDisplayComp/ListViewDisplayComp";

const LowerMainBodyComp: React.FC = (props) => {
  const [fruitList, setFruitList] = useState<Fruit[]>([]);
  const [dataLoaded, setDataLoaded] = useState<Boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>("grid");

  const numRowsFiveGrid = Math.ceil(fruitList.length / 5);
  const numRowsFourGrid = Math.ceil(fruitList.length / 4);

  const rowArrayFiveGrid = Array.from(Array(numRowsFiveGrid).keys());
  const rowArrayFourGrid = Array.from(Array(numRowsFourGrid).keys());

  const convertListDataToDoubleArray: (
    rawFruitList: Fruit[],
    rowNum: number
  ) => Fruit[][] = (rawFruitList, rowNum) => {
    const newDoubleFruitList: Fruit[][] = [];

    rawFruitList.forEach((fruit, index) => {
      const rowRemainder = Math.floor(index / rowNum);

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

  const finalDoubeList = convertListDataToDoubleArray(fruitList, 5);

  const finalFourListDisplay = convertListDataToDoubleArray(fruitList, 4);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_KEY
          ? process.env.REACT_APP_API_KEY
          : "http://localhost:8080/allfruits"
      )
      .then((res) => {
        setFruitList(res.data);
        setDataLoaded(true);
      })
      .catch((err) => {});
  }, []);

  const handleGridListViewChange = (tabType: string) => {
    setCurrentTab(tabType);
  };

  return (
    dataLoaded && (
      <div className={styles.lowerMainBodyCompContainer}>
        <div className={styles.listGridViewTabContainer}>
          <button
            onClick={() => handleGridListViewChange("list")}
            style={{
              boxShadow: "0px 1px 3px grey",
              marginLeft: "1rem",
            }}
            className={styles.listGridButtonStyle}
          >
            List View
          </button>
          <button
            onClick={() => handleGridListViewChange("grid")}
            style={{
              boxShadow: "0px 1px 3px grey",
              marginLeft: "1rem",
            }}
            className={styles.listGridButtonStyle}
          >
            Grid View
          </button>
        </div>
        {currentTab === "grid" ? (
          <GridViewDisplayComp
            rowArrayFourGrid={rowArrayFourGrid}
            finalDoubeList={finalDoubeList}
            finalFourListDisplay={finalFourListDisplay}
            rowArrayFiveGrid={rowArrayFiveGrid}
          ></GridViewDisplayComp>
        ) : (
          <ListViewDisplayComp fruitData={fruitList}></ListViewDisplayComp>
        )}
      </div>
    )
  );
};

export default LowerMainBodyComp;
