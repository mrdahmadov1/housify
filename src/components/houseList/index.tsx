import React from "react";
import HouseCard from "../houseCard";
import IHouse from "../../models/IHouse";
import styles from "./assets/css/styles.module.css";

interface HouseListProps {
  houseList: IHouse[];
}

const HouseList: React.FC<HouseListProps> = ({ houseList }) => {
  return (
    <>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.houseList}>
            {houseList.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseList;
