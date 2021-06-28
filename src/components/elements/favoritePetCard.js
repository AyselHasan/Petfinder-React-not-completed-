import img from "./../../assets/images/article-card-1.jpg";

const FavoritePetCard = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-mg-6 col-12 mt-5">
      <div className="fav-card">
        <div
          className="
            fav-card-icon
            d-flex
            justify-content-center
            align-items-center
            cursor-pointer
          "
        >
          <span
            aria-hidden="true"
            data-icon=""
            className="down-arrow vio-font-color font-size-30"
          />
        </div>
        <div className="fav-card-pic">
          <img src={img} alt="" />
        </div>
        <div className="favorite-content">
          <div className="fav-pet-name d-flex justify-content-center">
            <span className="vio-font-color font-size-30 fw-bolder mt-3">
              Sophia
            </span>
          </div>
          <div className="fav-card-details mt-3">
            <ul className="list-unstyled">
              <li
                className="
                  d-flex
                  justify-content-center
                  font-color-gray
                  fw-bolder
                "
              >
                Gender · Age
              </li>
              <li
                className="
                  d-flex
                  justify-content-center
                  font-size-15
                  fw-bolder
                  adopt-it
                  cursor-pointer
                  mt-2
                "
              >
                Adopt it
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FavoritePetCard;
