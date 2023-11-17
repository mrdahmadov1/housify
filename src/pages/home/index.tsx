import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { ref, onValue } from "firebase/database";
import FilterBar from "../../components/filterBar";
import HouseList from "../../components/houseList";
import IHouse from "../../models/IHouse";

function Home() {
  const [filterValues, setFilterValues] = useState({
    min: "",
    max: "",
    rooms: "",
    floor: "",
  });
  const [originalHouseList, setOriginalHouseList] = useState<IHouse[]>([]);
  const [filteredHouseList, setFilteredHouseList] = useState<IHouse[]>([]);
  const housesRef = ref(db, "houses");

  onValue(housesRef, (snapshot) => {
    const houses = snapshot.val();
    !originalHouseList.length && setOriginalHouseList(houses);
  });

  useEffect(() => {
    const updatedFilteredHouseList = originalHouseList.filter((house) => {
      return (
        (filterValues.min === "" ||
          house.price >= parseFloat(filterValues.min)) &&
        (filterValues.max === "" ||
          house.price <= parseFloat(filterValues.max)) &&
        (filterValues.rooms === "" ||
          house.rooms === parseInt(filterValues.rooms)) &&
        (filterValues.floor === "" ||
          house.floor.split("/")[0] === filterValues.floor)
      );
    });

    setFilteredHouseList(updatedFilteredHouseList);
  }, [filterValues, originalHouseList]);

  return (
    <>
      <FilterBar setFilterValues={setFilterValues} />
      <HouseList houseList={filteredHouseList} />
    </>
  );
}

export default Home;
