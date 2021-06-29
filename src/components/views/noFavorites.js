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
          {/* <div className="find-buttons mt-5 d-flex justify-content-center">
            <div className="row">
              <button className="find-pet-btn col-lg-12 col-xl-12">
                FIND A DOG
              </button>
            </div>
            <div className="row">
              <button className="find-pet-btn fw-bolder mt-3 col-lg-12 col-xl-12">
                FIND A CAT
              </button>
            </div>
            
          </div> */}

          <div className="find-pet-buttons d-flex justify-content-center mt-5">
            <ul className="list-unstyled">
              <li className="row">
                <button className="find-pet-btn mt-3 col-lg-12 col-12">
                  FIND A DOG
                </button>
              </li>
              <li className="row">
                <button className="find-pet-btn mt-3 col-lg-12 col-12">
                  FIND A CAT
                </button>
              </li>
              <li className="dropdown row">
                <button
                  className="
                col-lg-12 col-12
                dropdown-btn
                            dropdown-toggle
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
                  <span className="text-white fw-bolder">FIND OTHER PETS</span>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NoFavorites;
