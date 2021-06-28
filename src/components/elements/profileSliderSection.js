import sliderImg from "./../../assets/images/catbreed-cover1.jpg";
const ProfileSliderSection = () => {
  return (
    <div className="pet-img-gallery mb-3">
      <div className="carousel carousel-bgblack">
        <div className="carousel-cell">
          <img src={sliderImg} />
        </div>
        <div className="carousel-cell">
          <img src={sliderImg} />
        </div>
        <div className="carousel-cell">
          <img src={sliderImg} />
        </div>
        <div className="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" />
        </div>
      </div>
    </div>
  );
};
export default ProfileSliderSection;
