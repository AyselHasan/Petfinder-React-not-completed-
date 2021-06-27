import ArticleCard from "./articleCard";
const ArticleCardsSection = () => {
  return (
    <section
      className="
          adoption-articles
          d-flex
          justify-content-center
          align-items-center
          height-auto
        "
    >
      <div className="container">
        <div className="row">
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </section>
  );
};

export default ArticleCardsSection;
