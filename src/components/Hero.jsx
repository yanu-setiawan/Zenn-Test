/* eslint-disable no-unused-vars */
import React from "react";
import car from "@assets/car.png";
import map from "@assets/bg Map.png";
import Wrapper from "./Wrapper";

export const Hero = () => {
  return (
    <>
      <Wrapper>
        <section className="pt-10 pb-10 lg:pt-[10rem] px-8 xl:px-0 lg:pb-[11.5rem] flex flex-col lg:flex-row relative ">
          <div className=" flex flex-col gap-12 z-10 ">
            <div className=" flex flex-col gap-5">
              <p className=" font-bold text-softBlack-0 text-[2rem] lg:text-[56px] leading-[120%] text-center lg:text-left lg:max-w-[47rem]">
                We Have Prepared a Car For Your Trip
              </p>
              <p className=" text-softGrey-0 text-base lg:text-xl text-center lg:text-left lg:max-w-[30rem]">
                We have many types of cars that are ready for you to travel
                anywhere and anytime.
              </p>
            </div>
            <div className=" flex gap-2 justify-center lg:justify-normal">
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
            className=" absolute top-7 right-0 xl:-right-[0.5rem] w-[800px] h-[555px] lg:w-[900px]"
          />
          <img
            src={car}
            alt="car"
            className=" hidden lg:flex absolute bottom-0 right-0 xl:-right-[1rem] w-[652px] h-[380px] xl:w-[852px] xl:h-[454px]"
          />
        </section>
      </Wrapper>
    </>
  );
};
