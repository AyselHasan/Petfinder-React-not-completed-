import "../../assets/scss/style.css";
import SearchBar from "./../elements/searchBar";
import FilterBreeds from "../elements/filterBreeds";
import BreedSlider from "./../elements/breedSlider";
import BreedCardsSection from "./../elements/breedCardsSection";

const CatBreeds = () => {
  return (
    <div>
      <SearchBar />
      <BreedSlider />
      <FilterBreeds />
      <BreedCardsSection />
    </div>
  );
};

export default CatBreeds;
