import RecentlyViewedCard from "./recentlyVCards";
import cardImg from "./../../assets/images/rv-card-img.jpg";
const RecentlyViewed = () => {
  return (
    <section className="recently-viewed-pets d-flex justify-content-around">
      <div className="resp-d-none-5 rv-cards mb-5">
        <p
          className="
        text-center
        font-size-45
        mt-5
        mb-5
        vio-font-color
        font-regular
      "
        >
          Recently Viewed Pets
        </p>
        <div className="row">
          <RecentlyViewedCard />
          <RecentlyViewedCard />
          <RecentlyViewedCard />
          <RecentlyViewedCard />
        </div>
      </div>
      {/* Responsible cards */}
      <div className="resp-d-none-4 mb-5">
        <p
          className="
        text-center
        font-size-45
        mt-5
        mb-5
        vio-font-color
        font-regular
      "
        >
          Recently Viewed Pets
        </p>
        <div
          className="carousel bg-transparent"
          data-flickity='{ "wrapAround": true }'
        >
          <div className="carousel-cell d-flex justify-content-center">
            <div className="pet-card shadow">
              <div
                className="
              card-fav-icon
              d-flex
              justify-content-center
              align-items-center
            "
              >
                <span
                  aria-hidden="true"
                  data-icon=""
                  className="down-arrow vio-font-color"
                />
              </div>
              <div className="pet-card-img">
                <img src={cardImg} alt />
              </div>
              <div
                className="
              pet-card-name
              d-flex
              justify-content-center
              align-items-center
            "
              >
                Pumpkin
              </div>
            </div>
          </div>
          <div className="carousel-cell d-flex justify-content-center">
            <div className="pet-card shadow">
              <div
                className="
              card-fav-icon
              d-flex
              justify-content-center
              align-items-center
            "
              >
                <span
                  aria-hidden="true"
                  data-icon=""
                  className="down-arrow vio-font-color"
                />
              </div>
              <div className="pet-card-img">
                <img src={cardImg} alt />
              </div>
              <div
                className="
              pet-card-name
              d-flex
              justify-content-center
              align-items-center
            "
              >
                Pumpkin
              </div>
            </div>
          </div>
          <div className="carousel-cell d-flex justify-content-center">
            <div className="pet-card shadow">
              <div
                className="
              card-fav-icon
              d-flex
              justify-content-center
              align-items-center
            "
              >
                <span
                  aria-hidden="true"
                  data-icon=""
                  className="down-arrow vio-font-color"
                />
              </div>
              <div className="pet-card-img">
                <img src={cardImg} alt />
              </div>
              <div
                className="
              pet-card-name
              d-flex
              justify-content-center
              align-items-center
            "
              >
                Pumpkin
              </div>
            </div>
          </div>
          <div className="carousel-cell d-flex justify-content-center">
            <div className="pet-card shadow">
              <div
                className="
              card-fav-icon
              d-flex
              justify-content-center
              align-items-center
            "
              >
                <span
                  aria-hidden="true"
                  data-icon=""
                  className="down-arrow vio-font-color"
                />
              </div>
              <div className="pet-card-img">
                <img src={cardImg} alt />
              </div>
              <div
                className="
              pet-card-name
              d-flex
              justify-content-center
              align-items-center
            "
              >
                Pumpkin
              </div>
            </div>
          </div>
          <div className="carousel-cell d-flex justify-content-center">
            <div className="pet-card shadow">
              <div
                className="
              card-fav-icon
              d-flex
              justify-content-center
              align-items-center
            "
              >
                <span
                  aria-hidden="true"
                  data-icon=""
                  className="down-arrow vio-font-color"
                />
              </div>
              <div className="pet-card-img">
                <img src={cardImg} alt />
              </div>
              <div
                className="
              pet-card-name
              d-flex
              justify-content-center
              align-items-center
            "
              >
                Pumpkin
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Responsible cards */}
    </section>
  );
};

export default RecentlyViewed;
