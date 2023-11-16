import styles from "./assets/css/styles.module.css";

function FilterBar() {
  return (
    <>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={`container ${styles.container}`}>
          <form className={`my-5 p-3 px-4 px-sm-3 ${styles.form}`}>
            <div className="row align-items-center justify-content-around row-gap-2 mb-2">
              <input
                className={`col col-12 col-sm-5 ${styles.input}`}
                type="text"
                placeholder="Price Min."
              />
              <input
                className={`col col-12 col-sm-5 ${styles.input}`}
                type="text"
                placeholder="Price Max."
              />
            </div>
            <div className="row align-items-center justify-content-around row-gap-2 mb-2">
              <input
                className={`col col-12 col-sm-5 ${styles.input}`}
                type="text"
                placeholder="Rooms"
              />
              <input
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
}

export default FilterBar;
