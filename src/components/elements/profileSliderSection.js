import sliderImg from "./../../assets/images/catbreed-cover1.jpg";
import React from "react";
import Slider from "react-slick";

export default function ProfileSliderSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="carousel pet-img-gallery">
      <div className="carousel-cell">
        <img src={sliderImg}></img>
      </div>
      <div className="carousel-cell">
        <img src={sliderImg}></img>
      </div>
      <div className="carousel-cell">
        <img src={sliderImg}></img>
      </div>
    </Slider>
    // <div className="mb-3">
    //   <div className="carousel carousel-bgblack">
    //     <div className="carousel-cell">
    //       <img src={sliderImg} />
    //     </div>
    //     <div className="carousel-cell">
    //       <img src={sliderImg} />
    //     </div>
    //     <div className="carousel-cell">
    //       <img src={sliderImg} />
    //     </div>
    //     <div className="carousel-cell">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" />
    //     </div>
    //   </div>
    // </div>
  );
}
