import BreedCard from "./breedCard";

const BreedCardsSection = () => {
  return (
    <section
      className="
    breed-cards
    d-flex
    align-items-center
    justify-content-center
    mt-5
    section-sizing
  "
    >
      <div className="breeds">
        <div className="container">
          <div className="row">
            <BreedCard />
            <BreedCard />
          </div>
        </div>
        <div className="pagination-section mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="select-page">
                      <div className="btn-group">
                        <button
                          className="
                        btn btn-secondary btn-lg
                        dropdown-toggle
                        pagination-btn
                      "
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Page 1/28
                        </button>
                        <div className="dropdown-menu">...</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 res-margin-1 margin-top-0">
                    <div className="next-page">
                      <button
                        type="button"
                        className="btn btn-lg next-btn pagination-btn"
                      >
                        <p className="btn-inner">
                          Next
                          <svg id="icon-chevronRight" viewBox="0 0 15.86 24.62">
                            <title>icon-chevronRight</title>
                            <path d="M14.87 14.69a3.48 3.48 0 0 0 0-4.86L5.95.91a3.49 3.49 0 0 0-4.93 4.93l6.4 6.42-6.4 6.4a3.493 3.493 0 1 0 4.94 4.94l8.87-8.86z" />
                          </svg>
                        </p>
                      </button>
                    </div>
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
export default BreedCardsSection;
