import React from "react";
import Fruit from "../../../../models/Fruit";
import ListEntryHorizComp from "./ListEntryHorizComp/ListEntryHorizComp";

import styles from "./ListViewDisplayComp.module.css";

interface ListViewDisplayCompProps {
  fruitData: Fruit[];
}

const ListViewDisplayComp: React.FC<ListViewDisplayCompProps> = (props) => {
  return (
    <div className={styles.listViewDisplayCompContainer}>
      {props.fruitData.map((fruitEntry, index) => (
        <ListEntryHorizComp singleFruitData={fruitEntry}></ListEntryHorizComp>
      ))}
    </div>
  );
};

export default ListViewDisplayComp;
