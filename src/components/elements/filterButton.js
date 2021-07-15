const FilterButton = () => {
  return (
    <div className="col-lg-12 mt-4">
      <p
        className="
                      font-color-gray
                      fw-bold
                      text-center
                      mb-2
                      font-size-13
                    "
      >
        BREED
      </p>
      <div className="dropdown d-flex justify-content-center">
        <button
          className="btn btn-secondary dropdown-toggle filter-btn"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="font-color-gray fw-bolder">Sort by</span>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item fw-bolder" href="#">
            Recently favorited
          </a>
          <a className="dropdown-item fw-bolder" href="#">
            Pet name (a-z)
          </a>
          <a className="dropdown-item fw-bolder" href="#">
            Pet name (z-a)
          </a>
          <a className="dropdown-item fw-bolder" href="#">
            Most days on Petfinder
          </a>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
