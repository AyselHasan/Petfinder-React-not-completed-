import BreedSliderCard from "./breedSliderCard";

const BreedSlider = () => {
  return (
    <section className="breed-slider d-flex align-items-center justify-content-center">
      <div className="container">
        <p className="text-center font-size-35 mb-4 res-margin-2">
          Find the Right Dog Breed for You
        </p>
        <div className="row">
          <div className="carousel" data-flickity='{ "wrapAround": true}'>
            <BreedSliderCard />
            <BreedSliderCard />
            <BreedSliderCard />
            <BreedSliderCard />
            <BreedSliderCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreedSlider;
