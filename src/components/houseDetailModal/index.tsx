import React from "react";
import IHouse from "../../models/IHouse";
import styles from "./assets/css/styles.module.css";

interface HouseDetailsModalProps {
  house: IHouse;
  closeModal: () => void;
}

const HouseDetailsModal: React.FC<HouseDetailsModalProps> = ({
  house,
  closeModal,
}) => {
  return (
    <>
      <div className={` ${styles.wrapper}`}>
        <div className="container">
          <div className={styles.houseDetails}>
            <div
              className={`d-flex align-items-center justify-content-between ${styles.header}`}
            >
              <h4 className={`col col-11 ${styles.title}`}>
                {house.rooms}-otaq Yeni Mənzil {house.area}m²
                <br /> {house.location}
              </h4>
              <i
                onClick={closeModal}
                className="bi bi-x-circle text-center col col-1"
              />
            </div>
            <div className={styles.gallery}>
              {house.images.map((image, index) => (
                <img key={index} src={image} alt="image" />
              ))}
            </div>
            <div className="row align-items-center justify-content-between">
              <div className={`col col-4 ${styles.detail}`}>
                <i className="bi bi-buildings" />
                {house.floor}
              </div>
              <div className={`col col-4 text-center ${styles.detail}`}>
                <i className="bi bi-door-open" />
                {house.rooms} rooms
              </div>
              <div className={`col col-4 ${styles.detail}`}>
                <i className="bi bi-x-diamond" />
                {house.area}m²
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseDetailsModal;
