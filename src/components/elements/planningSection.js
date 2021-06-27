import PlanningCard from "./planningCard";

const Planning = () => {
  return (
    <section className="planning">
      <div
        className="
    planning-adopt
    bg-white
    shadow
    mt-5
    d-flex
    justify-content-center
    align-items-center
    height-auto
  "
      >
        <div className="container resp-d-none-5">
          <p className="text-center font-size-35 mb-5 font-regular">
            Planning to Adopt a Pet?
          </p>
          <div className="row">
            <PlanningCard />
            <PlanningCard />
            <PlanningCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planning;
