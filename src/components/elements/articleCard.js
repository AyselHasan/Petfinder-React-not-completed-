import cardImg from "./../../assets/images/article-card-1.jpg";

const ArticleCard = () => {
  return (
    <div className="col-lg-6 col-12 art-card mt-3">
      <div className="card-content">
        <div
          className="card-img"
          style={{ backgroundImage: `url(${cardImg})` }}
        />
        <div className="card-mini-photo">
          <img src={cardImg} alt />
        </div>
        <div
          className="
            card-inner
            d-flex
            align-items-center
            justify-content-center
            text-center
          "
        >
          <span className="font-regular">
            <span className="font-size-20 fw-bolder">
              Cat Adoption Articles
            </span>
            <br />
            <br />
            Helpful insights on what to expect.
          </span>
        </div>
        <div
          className="
            card-read-more
            text-center
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <p className="font-size-20 fw-bold font-regular">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
