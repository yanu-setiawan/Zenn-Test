/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import image from "@assets/user.png";
import image2 from "@assets/user2.png";
import image3 from "@assets/user3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardTesti from "./ui/CardTesti";

const SliderTestimony = () => {
  const testimonyUser = [
    {
      name: "Robert Antonio",
      imgUser: image,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Bandung",
    },
    {
      name: "Felix Tonare",
      imgUser: image2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Bali",
    },
    {
      name: "Michelin Ryu",
      imgUser: image3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Jakarta",
    },
    {
      name: "Robert Antonio",
      imgUser: image,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Bandung",
    },
    {
      name: "Gillbert Ein",
      imgUser: image2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Sumatera",
    },
    {
      name: "Steve Jorge",
      imgUser: image3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Surabaya",
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
    <div className="slider-container py-2">
      <Slider {...settings}>
        {testimonyUser.map((item, index) => (
          <div key={index} className=" py-2 px-2 flex-1">
            <CardTesti
              comment={item.comment}
              imgUser={item.imgUser}
              name={item.name}
              address={item.address}
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
      className={`btn btn-xs lg:btn-md lg:text-lg bg-primary-0  btn-circle absolute top-[42%]  right-[0.1rem] md:-right-1 xl:-right-[2rem] border-primary-0 text-white md:hover:bg-primary-0 md:hover:border-primary-0 transition-all duration-500 z-[1] hover:scale-125 ${
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
      className={`btn btn-xs lg:btn-md lg:text-lg bg-primary-0  btn-circle absolute top-[42%]  left-[0.1rem] md:-left-1 xl:-left-[2rem] border-primary-0 text-white md:hover:bg-primary-0 md:hover:border-primary-0 transition-all duration-500 z-[1] hover:scale-125 ${
        onClick ? "" : "hidden"
      } backdrop-blur-xl`}
    >
      <FaChevronLeft />
    </button>
  );
}

export default SliderTestimony;
