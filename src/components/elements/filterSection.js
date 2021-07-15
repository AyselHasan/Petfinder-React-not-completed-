import FilterButton from "./filterButton";

const FilterSection = () => {
  return (
    <section className="filter-section">
      <div className="row">
        <FilterButton />
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
    </section>
  );
};

export default FilterSection;
