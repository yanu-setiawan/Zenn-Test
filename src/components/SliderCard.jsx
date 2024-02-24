/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import JaguarImage from "@cars/Jaguar F-Pace.png";
import LexusImage from "@cars/Lexus CT 200h.png";
import MarcedesImage from "@cars/Marcedes Benz.png";
import Card from "./ui/Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderCard = () => {
  const dataCars = [
    {
      name: "Jaguar F-Pace",
      image: JaguarImage,
      price: "120",
      location: "Bandung",
    },
    {
      name: "Lexus CT200H",
      image: LexusImage,
      price: "125",
      location: "Bali",
    },
    {
      name: "Mercedes Benz",
      image: MarcedesImage,
      price: "128",
      location: "Jakarta",
    },
    {
      name: "Jaguar F-Pace",
      image: JaguarImage,
      price: "120",
      location: "Bandung",
    },
    {
      name: "Lexus CT200H",
      image: LexusImage,
      price: "125",
      location: "Bali",
    },
    {
      name: "Mercedes Benz",
      image: MarcedesImage,
      price: "128",
      location: "Jakarta",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {dataCars.map((item, index) => (
          <div key={index} className=" px-5">
            <Card
              image={item.image}
              name={item.name}
              price={item.price}
              location={item.location}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`btn btn-xs lg:btn-md lg:text-lg bg-primary-0  btn-circle absolute top-[25%]  right-[0.1rem] md:-right-1 xl:-right-[1.8rem] border-primary-0 text-white md:hover:bg-primary-0 md:hover:border-primary-0 transition-all duration-500 z-[1] hover:scale-110 ${
        onClick ? "" : "hidden"
      } backdrop-blur-xl`}
    >
      <FaChevronRight />
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`btn btn-xs lg:btn-md lg:text-lg bg-primary-0  btn-circle absolute top-[25%]  left-[0.1rem] md:-left-1 xl:-left-[1.8rem] border-primary-0 text-white md:hover:bg-primary-0 md:hover:border-primary-0 transition-all duration-500 z-[1] hover:scale-110 ${
        onClick ? "" : "hidden"
      } backdrop-blur-xl`}
    >
      <FaChevronLeft />
    </button>
  );
}

export default SliderCard;
