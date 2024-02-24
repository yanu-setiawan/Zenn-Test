/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./ui/Card";
import Jaguar from "@cars/Jaguar F-Pace.png";
import Lexus from "@cars/Lexus CT 200h.png";
import Marcedes from "@cars/Marcedes Benz.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SliderCard from "./SliderCard";

const SampleBrand = () => {
  const dataCars = [
    {
      name: "Jaguar F-Pace",
      image: Jaguar,
      price: "120",
      location: "Bandung",
    },
    {
      name: "Lexus CT200H",
      image: Lexus,
      price: "125",
      location: "Bali",
    },
    {
      name: "Marcedes Benz",
      image: Marcedes,
      price: "128",
      location: "Jakarta",
    },
  ];

  return (
    <section className=" flex flex-col py-5 px-8 lg:px-24 ">
      <div className=" text-center flex flex-col justify-center gap-3 opacity-70 pb-8">
        <h2 className=" text-2xl text-primary-0 font-bold">Popular Car</h2>
        <p className=" text-[1.7rem] lg:text-[2.7rem] text-softBlack-0 font-medium">
          Choose Your Suitable Car
        </p>
        <p className=" text-sm lg:text-lg text-softGrey-0">
          We present popular cars that are rented by customers to maximize your
          comfort on long trips.
        </p>
      </div>
      <div className=" pt-5 flex justify-around items-center">
        {/* <SliderCard /> */}
      </div>
    </section>
  );
};

export default SampleBrand;
