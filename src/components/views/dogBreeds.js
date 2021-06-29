import "../../assets/scss/style.css";
import SearchBar from "./../elements/searchBar";
import FilterBreeds from "../elements/filterBreeds";
import BreedSlider from "./../elements/breedSlider";
import BreedsCardSection from "./../elements/breedCardsSection";

const DogBreeds = () => {
  return (
    <div>
      <SearchBar />
      <BreedSlider />
      <FilterBreeds />
      <BreedsCardSection />
    </div>
  );
};

export default DogBreeds;
