import sliderImage from "./../../assets/images/breedcard1.jpg";

const BreedSliderCard = () => {
  return (
    <div className="carousel-cell">
      <a href>
        <div className="slider-card shadow">
          <div className="slider-card-media">
            <img src={sliderImage} />
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
        </div>
      </a>
    </div>
  );
};
export default BreedSliderCard;
