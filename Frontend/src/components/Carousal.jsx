import React from "react";
import bookbanner from "../assets/bookbanner.jpg";
import bookbanner2 from "../assets/bookbanner2.jpg";
import bookbanner3 from "../assets/bookbanner3.jpg";
import bookbanner4 from "../assets/bookbanner4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousal() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 mb-10">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src={bookbanner} className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={bookbanner2} className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={bookbanner3} className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src={bookbanner4} className="w-full" />
          </div>
        </div>

        <div className="flex w-full justify-center gap-2 py-5">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </>
  );
}

export default Carousal;
