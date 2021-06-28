import cardImg from "./../../assets/images/breedcard1.jpg";

const BreedCard = () => {
  return (
    <div className="col-lg-6 res-margin-2">
      <div className="breedcard-body card-hover">
        <div className="card-photo">
          <img src={cardImg} alt="" />
        </div>
        <div
          className="
      breed-name
      align-items-center
      bg-white
      d-flex
      justify-content-center
      align-items-center
      font-size-30
      vio-font-color
      fw-bolder
      res-margin-4
    "
        >
          Affenpinscher
        </div>
        <div
          className="
      breed-availability
      d-flex
      justify-content-center
      align-items-center
      bg-white
    "
        >
          12 available for adoption
        </div>
      </div>
    </div>
  );
};
export default BreedCard;
