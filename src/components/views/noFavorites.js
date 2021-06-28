const NoFavorites = () => {
  return (
    <section className="no-favorites">
      <div className="no-favs mt-5 mb-5">
        <div className="row text-center">
          <div className="col-md-12">
            <span className="fw-bolder font-size-45 font-color-gray">
              No Favorites here yet
            </span>
          </div>
          <div className="col-md-12">
            <div className="mt-5">
              <span className="font-size-20">
                When you find a pet you love, add it to your favorites list by
                tapping the
                <span
                  aria-hidden="true"
                  data-icon=""
                  className="down-arrow vio-font-color"
                />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="find-buttons mt-5">
                <ul>
                  <li>
                    <button className="find-pet-btn">FIND A DOG</button>
                  </li>
                  <li>
                    <button className="find-pet-btn fw-bolder mt-3">
                      FIND A CAT
                    </button>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button
                        className="
                            btn btn-secondary
                            dropdown-toggle
                            filter-btn
                            find-pet-btn
                            fw-bolder
                            mt-3
                          "
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="text-white fw-bolder">
                          FIND OTHER PETS
                        </span>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          className="dropdown-item fw-bolder vio-font-color"
                          href="#"
                        >
                          Rabbits
                        </a>
                        <a
                          className="dropdown-item fw-bolder vio-font-color"
                          href="#"
                        >
                          Birds
                        </a>
                        <a
                          className="dropdown-item fw-bolder vio-font-color"
                          href="#"
                        >
                          Horses
                        </a>
                        <a
                          className="dropdown-item fw-bolder vio-font-color"
                          href="#"
                        >
                          Scales, Fins &amp; Other
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NoFavorites;
