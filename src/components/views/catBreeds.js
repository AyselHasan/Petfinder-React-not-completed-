import "../../assets/scss/style.css";
import SearchBar from "./../elements/searchBar";
import FilterBreeds from "../elements/filterBreeds";

const CatBreeds = () => {
  return (
    <div>
      <SearchBar />
      <FilterBreeds />
    </div>
  );
};

export default CatBreeds;
