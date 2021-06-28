import sliderImage from "./../../assets/images/breedcard1.jpg";

const BreedSliderCard = () => {
  return (
    <div className="carousel-cell">
      <div className="slider-card shadow">
        <a href>
          <div className="card-media">
            <img className="media-img" src={sliderImage} alt="" />
          </div>
          <div
            className="
              slider-card-footer
              text-dark
              fw-bold
              d-flex
              align-items-center
              justify-content-center
              font-size-13
            "
          >
            <h3>HYPOALLERGENIC DOGS</h3>
          </div>
        </a>
      </div>
    </div>
  );
};
export default BreedSliderCard;
