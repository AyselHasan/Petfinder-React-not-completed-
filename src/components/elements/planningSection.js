import PlanningCard from "./planningCard";
import PlanningCardResp from "./planningCardResp";

const Planning = () => {
  return (
    <section className="planning-adopt-section">
      <div className="planning">
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
      </div>

      {/* Responsible Planning Cards */}

      <div class="resp-planning  resp-d-none-4 ">
        <div
          class="carousel height-auto"
          data-flickity='{ "wrapAround": true }'
        >
          <PlanningCardResp />
          <PlanningCardResp />
          <PlanningCardResp />
        </div>
      </div>

      {/* Responsible Planning Cards */}
    </section>
  );
};

export default Planning;
