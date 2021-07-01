import dogCareCard from "../elements/dogCareCard";
const dogCareSection = () => {
  return (
    <section className="petcare-cards mb-3">
      <div className="container">
        <dogCareCard />
        <dogCareCard />
        <dogCareCard />
        <dogCareCard />
        <dogCareCard />
      </div>
    </section>
  );
};

export default dogCareSection;
