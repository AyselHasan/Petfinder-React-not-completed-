import breedBG from "./../../assets/images/catbreed-cover1.jpg";

const SearchBar = () => {
  return (
    <section
      className="
        search-bar
        find-breeds
        d-flex
        justify-content-center
        align-items-center
      "
      style={{ backgroundImage: `url(${breedBG})` }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="search-area section-sizing">
            <nav style={{ bsBreadcrumbDivider: '">"' }} aria-label="breadcrumb">
              <ol className="breadcrumb d-flex justify-content-center bg-transparent">
                <li className="breadcrumb-item active">
                  <a href="#" style={{ color: "#6504b5" }}>
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item active text-dark"
                  aria-current="page"
                >
                  Cat breeds
                </li>
              </ol>
            </nav>
            <div className="row d-flex justify-content-center">
              <div
                className="
                  col-md-9 col-sm-10
                  search-heading
                  text-center
                  d-flex
                  justify-content-center
                "
              >
                <p>Find Your Perfect Cat Breed</p>
              </div>
            </div>
            <div className="row">
              <div
                className="
                  input-box
                  d-flex
                  align-items-center
                  col-md-12 col-sm-12
                "
              >
                <div className="container">
                  <div className="row">
                    <div
                      className="
                        icon-section
                        col-lg-2
                        d-flex
                        justify-content-center
                        align-items-center
                        font-size-20
                      "
                    >
                      <div className="search-icon">
                        <span aria-hidden="true" data-icon="" />
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="By Name"
                        id="search-bar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="breed-buttons">
              <div className="d-flex justify-content-center mt-4">
                <div className="row res-margin-bottom-2">
                  <div className="col-lg-6 col-md-6 col-12 res-margin-1">
                    <button className="search-btn w-100">By Collection</button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 res-margin-1">
                    <button className="search-btn w-100">By Filters</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
