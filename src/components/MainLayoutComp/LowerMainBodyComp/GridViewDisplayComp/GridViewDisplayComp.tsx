import React from "react";
import Fruit from "../../../../models/Fruit";
import FiveRowFruitGridContainer from "../FiveRowFruitGridContainer/FiveRowFruitGridContainer";
import FourRowFruitGridContainer from "../FourRowFruitGridContainer/FourRowFruitGridContainer";

interface GridViewDisplayCompProps {
  finalDoubeList: Fruit[][];
  finalFourListDisplay: Fruit[][];
  rowArrayFiveGrid: number[];
  rowArrayFourGrid: number[];
}

const GridViewDisplayComp: React.FC<GridViewDisplayCompProps> = (props) => {
  return (
    <React.Fragment>
      <FiveRowFruitGridContainer
        finalDoubeList={props.finalDoubeList}
        rowArray={props.rowArrayFiveGrid}
      ></FiveRowFruitGridContainer>
      <FourRowFruitGridContainer
        finalDoubeList={props.finalFourListDisplay}
        rowArray={props.rowArrayFourGrid}
      ></FourRowFruitGridContainer>
    </React.Fragment>
  );
};

export default GridViewDisplayComp;
