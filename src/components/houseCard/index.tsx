import React from "react";
import IHouse from "../../models/IHouse";
import styles from "./assets/css/styles.module.css";

interface HouseCardProps {
  house: IHouse;
}

const HouseCard: React.FC<HouseCardProps> = ({ house }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.coverImage}>
          <img src={house.images[0]} alt="cover image" />
        </div>
        <div className={styles.content}>
          <h4 className={styles.price}>{house.price} AZN</h4>
          <p className={styles.location}>
            <i className="bi bi-geo-alt-fill" />
            {house.location}
          </p>
          <div className="row align-items-center justify-content-between">
            <div className={`col col-4 text-center ${styles.detail}`}>
              <i className="bi bi-buildings" />
              {house.floor}
            </div>
            <div className={`col col-4 text-center ${styles.detail}`}>
              <i className="bi bi-door-open" />
              {house.rooms}
            </div>
            <div className={`col col-4 text-center ${styles.detail}`}>
              <i className="bi bi-x-diamond" />
              {house.area}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseCard;
