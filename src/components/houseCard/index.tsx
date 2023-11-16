import styles from "./assets/css/styles.module.css";

const house = {
  id: 1,
  location: "Nəriman Nərimanov",
  floor: "2/12",
  rooms: 4,
  price: 300000,
  area: 130,
  images: [
    "https://images.pexels.com/photos/19050705/pexels-photo-19050705/free-photo-of-windows-of-an-apartment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8082307/pexels-photo-8082307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7587287/pexels-photo-7587287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7587737/pexels-photo-7587737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18999120/pexels-photo-18999120/free-photo-of-white-windows-of-a-black-brick-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  tel: "+994 70 878 30 06",
};

function HouseCard() {
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
            <div className={`col col-4 ${styles.detail}`}>
              <i className="bi bi-buildings" />
              {house.floor}
            </div>
            <div className={`col col-3 ${styles.detail}`}>
              <i className="bi bi-door-open" />
              {house.rooms}
            </div>
            <div className={`col col-3 ${styles.detail}`}>
              <i className="bi bi-x-diamond" />
              {house.area}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HouseCard;
