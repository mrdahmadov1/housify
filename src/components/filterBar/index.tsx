import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./assets/css/styles.module.css";

interface FilterBarProps {
  setFilterValues: React.Dispatch<
    React.SetStateAction<{
      min: string;
      max: string;
      rooms: string;
      floor: string;
    }>
  >;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilterValues }) => {
  const initialValues = {
    min: "",
    max: "",
    rooms: "",
    floor: "",
  };

  const validationSchema = Yup.object({
    min: Yup.number(),
    max: Yup.number(),
    rooms: Yup.number(),
    floor: Yup.number(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setFilterValues(values);
      resetForm();
    },
  });

  return (
    <>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={`container ${styles.container}`}>
          <form
            onSubmit={formik.handleSubmit}
            className={`my-5 p-3 px-4 px-sm-3 ${styles.form}`}
          >
            <div className="row align-items-center justify-content-around row-gap-2 mb-2">
              <input
                name="min"
                value={formik.values.min}
                onChange={formik.handleChange}
                className={`col col-12 col-sm-5 ${styles.input}`}
                type="text"
                placeholder="Price Min."
              />
              <input
                name="max"
                value={formik.values.max}
                onChange={formik.handleChange}
                className={`col col-12 col-sm-5 ${styles.input}`}
                type="text"
                placeholder="Price Max."
              />
            </div>
            <div className="row align-items-center justify-content-around row-gap-2 mb-2">
              <input
                name="rooms"
                value={formik.values.rooms}
                onChange={formik.handleChange}
                className={`col col-12 col-sm-5 ${styles.input}`}
                type="text"
                placeholder="Rooms"
              />
              <input
                name="floor"
                value={formik.values.floor}
                onChange={formik.handleChange}
                className={`col col-12 col-sm-5 ${styles.input}`}
                type="text"
                placeholder="Floor"
              />
            </div>
            <div className="row align-items-center justify-content-around">
              <div className="col col-12 col-sm-5" />
              <div
                className={`col col-12 col-sm-5 p-0 d-flex justify-content-end`}
              >
                <button
                  className={`col col-12 col-sm-2 ${styles.btnSearch}`}
                  type="submit"
                >
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
