const FilterBreeds = () => {
  return (
    <section
      className="
        filter-breeds
        d-flex
        align-items-center
        justify-content-center
        section-sizing
        mt-2
      "
    >
      <div className="container res-margin">
        <div className="filter-breed-heading res-margin">
          <p className="font-size-35 text-dark font-regular text-center mb-5">
            Filter Your Cat Breed
          </p>
        </div>
        <div className="row res-margin">
          <div className="col-lg-5 res-margin">
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
          <div className="col-lg-5 res-margin">
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
          <div
            className="
              col-lg-2
              res-margin
              d-flex
              align-items-center
              justify-content-center
              vio-font-color
              fw-bolder
            "
          >
            Reset Filters()
          </div>
        </div>
        <div className="row mt-5 res-margin">
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
          <div className="mt-4 res-margin">
            <ul className="list-unstyled">
              <li>
                View All Filters
                <svg id="icon-chevronDown" viewBox="0 0 24.8 15.92">
                  <title>icon-chevronDown</title>
                  <path d="M9.95,14.95a3.57,3.57,0,0,0,4.9,0l8.9-8.9a3.5,3.5,0,0,0,0-5,3.5,3.5,0,0,0-5,0h0l-6.4,6.4-6.3-6.4a3.5,3.5,0,0,0-5,0,3.5,3.5,0,0,0,0,5l8.9,8.9Z" />
                </svg>
              </li>
              <li>
                Show Less Filters
                <svg id="icon-chevronUp" viewBox="0 0 24.8 15.9">
                  <title>icon-chevronUp</title>
                  <path d="M14.9 1C13.5-.3 11.4-.3 10 1L1.1 9.9c-1.4 1.4-1.4 3.6-.1 4.9l.1.1c1.4 1.4 3.6 1.4 4.9.1l.1-.1 6.4-6.4 6.3 6.4c1.4 1.4 3.6 1.4 4.9.1l.1-.1c1.4-1.4 1.4-3.6.1-4.9l-.1-.1L14.9 1z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBreeds;
