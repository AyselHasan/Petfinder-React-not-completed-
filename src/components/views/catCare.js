import catCareCard from "./../elements/catCareCard";

const catCareSection = () => {
  return (
    <section className="petcare-cards mb-3">
      <div className="container">
        <catCareCard />
        <catCareCard />
        <catCareCard />
        <catCareCard />
        <catCareCard />
      </div>
    </section>
  );
};

export default catCareSection;
