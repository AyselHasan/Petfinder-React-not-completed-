import SliderImage from "./../../assets/images/breedcard1.jpg";

const BreedSliderCard = () => {
  return (
    <div className="slider-card-media">
      <img src={SliderImage} style={{ maxWidth: "95%" }}></img>
      <h4>HYPOALLERGENIC DOGS</h4>
    </div>
  );
};
export default BreedSliderCard;
