import FavoritePetCard from "./favoritePetCard";

const FavoritesSection = () => {
  return (
    <section className="my-favorites">
      <div className="fav-heading mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="font-size-35 font-color-gray font-regular fw-bolder">
                My Favorites()
              </p>
            </div>
            <div className="col-lg-4 res-margin-2">
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
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
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
          </div>
        </div>
      </div>
      <div className="fav-cards p-5">
        <div className="row">
          <FavoritePetCard />
          <FavoritePetCard />
          <FavoritePetCard />
          <FavoritePetCard />
        </div>
      </div>
    </section>
  );
};
export default FavoritesSection;
