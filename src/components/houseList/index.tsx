import { db } from "../../utils/firebase";
import { ref, onValue } from "firebase/database";
import HouseCard from "../houseCard";
import styles from "./assets/css/styles.module.css";
import IHouse from "../../models/IHouse";
import { useState } from "react";

function HouseList() {
  const [houseList, setHouseList] = useState<IHouse[]>([]);
  const housesRef = ref(db, "houses");

  onValue(housesRef, (snapshot) => {
    const houses = snapshot.val();
    !houseList.length && setHouseList(houses);
  });

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
}

export default HouseList;
