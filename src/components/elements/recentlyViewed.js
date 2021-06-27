import RecentlyViewedCard from "./recentlyVCards";
import RecentlyViewedCardsResp from "./recentlyVCardsResp";

const RecentlyViewed = () => {
  return (
    <section className="recently-viewed-pets d-flex justify-content-around">
      <div className="resp-d-none-5 rv-cards mb-5">
        <p
          className="
        text-center
        font-size-45
        mt-5
        mb-5
        vio-font-color
        font-regular
      "
        >
          Recently Viewed Pets
        </p>
        <div className="row">
          <RecentlyViewedCard />
          <RecentlyViewedCard />
          <RecentlyViewedCard />
          <RecentlyViewedCard />
        </div>
      </div>
      {/* Responsible cards */}
      <div className="resp-d-none-4 mb-5">
        <p
          className="
        text-center
        font-size-45
        mt-5
        mb-5
        vio-font-color
        font-regular
      "
        >
          Recently Viewed Pets
        </p>
        <div
          className="carousel bg-transparent"
          data-flickity='{ "wrapAround": true }'
        >
          <RecentlyViewedCardsResp />
          <RecentlyViewedCardsResp />
          <RecentlyViewedCardsResp />
          <RecentlyViewedCardsResp />
          <RecentlyViewedCardsResp />
        </div>
      </div>
      {/* Responsible cards */}
    </section>
  );
};

export default RecentlyViewed;
