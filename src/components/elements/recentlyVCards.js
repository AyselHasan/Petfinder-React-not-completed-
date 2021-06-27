import cardImg from "./../../assets/images/rv-card-img.jpg";

const RecentlyViewedCard = () => {
  return (
    <div className="col-lg-3">
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
  );
};
export default RecentlyViewedCard;
