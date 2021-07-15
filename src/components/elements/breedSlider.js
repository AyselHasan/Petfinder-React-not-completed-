import BreedSliderCard from "./breedSliderCard";
import React, { Component } from "react";
import Slider from "react-slick";

export default class BreedSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings} className="mt-4">
        <BreedSliderCard />
        <BreedSliderCard />
        <BreedSliderCard />
        <BreedSliderCard />
        <BreedSliderCard />
        <BreedSliderCard />
        <BreedSliderCard />
        <BreedSliderCard />
      </Slider>
      // <section className="breed-slider d-flex align-items-center justify-content-center">
      //   <div className="container">
      //     <p className="text-center font-size-35 mb-4 res-margin-2">
      //       Find the Right Dog Breed for You
      //     </p>
      //     <div className="row">
      //       <div className="carousel" data-flickity='{ "wrapAround": true}'>
      //         <BreedSliderCard />
      //         <BreedSliderCard />
      //         <BreedSliderCard />
      //         <BreedSliderCard />
      //         <BreedSliderCard />
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}
