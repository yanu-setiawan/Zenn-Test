/* eslint-disable no-unused-vars */
import React from "react";
import car from "@assets/car.png";
import map from "@assets/bg Map.png";

export const Hero = () => {
  return (
    <>
      <section className=" mx-24 pt-[7.5rem] pb-44 flex relative ">
        <div className=" flex flex-col gap-12 z-10">
          <div className=" flex flex-col gap-5">
            <p className=" font-bold text-softBlack-0 text-[56px] leading-[120%]">
              We Have Prepared a Car For <br /> Your Trip
            </p>
            <p className=" text-softGrey-0 text-xl">
              We have many types of cars that are ready for you to travel <br />
              anywhere and anytime.
            </p>
          </div>
          <div className=" flex gap-2">
            <button className="btn bg-primary-0 text-white h-12 w-32 ">
              Get In Touch
            </button>
            <button className=" w-32 h-12 btn btn-outline border-primary-0 hover:bg-white hover:text-primary-0 text-primary-0 hover:border-primary-0">
              Our Car
            </button>
          </div>
        </div>

        <img
          src={map}
          alt="map"
          className=" absolute top-7 -right-24"
          width={790}
          height={534}
        />
        <img src={car} alt="car" className=" absolute bottom-0  -right-24" />
      </section>
    </>
  );
};
