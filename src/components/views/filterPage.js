import FilterSection from "../elements/filterSection";
import FavoritePetCard from "../elements/favoritePetCard";
import FilterPageCards from "../elements/filterPageCards";

const FilterPage = () => {
  return (
    <div class="">
      <div class="row">
        <div class="col-xl-3">
          <FilterSection />
        </div>
        <div class="col-xl-9 mb-5">
          <div class="pet-cards-section">
            <div class="row">
              <div className="col-xl-4 mt-5">
                <FilterPageCards />
              </div>
              <div className="col-xl-4 mt-5">
                <FilterPageCards />
              </div>
              <div className="col-xl-4 mt-5">
                <FilterPageCards />
              </div>
              <div className="col-xl-4 mt-5">
                <FilterPageCards />
              </div>
              <div className="col-xl-4 mt-5">
                <FilterPageCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
