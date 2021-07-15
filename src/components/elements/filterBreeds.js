const FilterBreeds = () => {
  return (
    <section
      className="
        filter-breeds
        d-flex
        align-items-center
        justify-content-center
        section-sizing
        mt-5
      "
    >
      <div className="container res-margin">
        <div className="filter-breed-heading res-margin">
          <p className="font-size-35 text-dark font-regular text-center mb-5">
            Filter Your Cat Breed
          </p>
        </div>
        <div className="row res-margin">
          <div className="col-lg-6 res-margin">
            <div className="filter-heading text-center mb-3">
              <p>GENDER</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <button className="filter-btn">Male</button>
              </div>
              <div className="col-lg-6">
                <button className="filter-btn">Female</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 res-margin">
            <div className="filter-heading text-center mb-3">
              <p>AGE</p>
            </div>
            <div className="dropdown d-flex justify-content-center">
              <button
                className="btn btn-secondary dropdown-toggle filter-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose age
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Affenpinscher
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="all-filters" className="row mt-5 res-margin">
          <div className="col-lg-6 res-margin">
            <div className="filter-heading text-center mb-3">
              <p>COLOR</p>
            </div>
            <div className="dropdown d-flex justify-content-center">
              <button
                className="btn btn-secondary dropdown-toggle filter-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose color
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Affenpinscher
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 res-margin">
            <div className="filter-heading text-center mb-3">
              <p>BREED</p>
            </div>
            <div className="dropdown d-flex justify-content-center">
              <button
                className="btn btn-secondary dropdown-toggle filter-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose breed
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Affenpinscher
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            id="filter-btn"
            className="
              res-margin
              btn-decoration
              mt-4
            "
          >
            Find!
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBreeds;
