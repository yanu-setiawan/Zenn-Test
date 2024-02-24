/* eslint-disable no-unused-vars */
import React from "react";
import { FaKey, FaRoad, FaUser } from "react-icons/fa";
import bg1 from "@assets/itemService/bgSer1.png";
import bg2 from "@assets/itemService/bgSer2.png";
import bg3 from "@assets/itemService/bg33.png";
import ButtonPrimary from "./ui/ButtonPrimary";
import Wrapper from "./Wrapper";

const Services = () => {
  const dataServices = [
    {
      icon: <FaKey size={55} />,
      name: "Instant Rent",
      description:
        "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task . . .",
      bgImg: bg1,
    },
    {
      icon: <FaUser size={55} />,
      name: "Instant Rent",
      description:
        "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task . . .",
      bgImg: bg2,
    },
    {
      icon: <FaRoad size={55} />,
      name: "Instant Rent",
      description:
        "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task . . .",
      bgImg: bg3,
    },
  ];
  return (
    <Wrapper>
      <section className=" flex w-full h-full justify-around items-center  bg-cover bg-center mt-5 lg:mt-14  ">
        <div className=" text-center flex flex-col justify-center gap-3 opacity-85  w-full h-full bg-white bg-opacity-95 px-8 py-16  lg:py-32 ">
          <div className=" flex flex-col opacity-100 gap-3 justify-center w-full">
            <h2 className=" text-2xl text-primary-0 font-bold">Services</h2>
            <p className=" text-[1.7rem] lg:text-[2.7rem] text-softBlack-0 font-medium">
              Our Services
            </p>
            <p className=" text-sm lg:text-lg text-softGrey-0 max-w-[50rem] mx-auto">
              Our service is not only renting a car, but we also provide a
              private chauffeur service that can guide you on your trip and also
              longtrip packages to support your travel needs.
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row gap-6 lg:gap-10  mt-10 items-center">
            {dataServices.map((item, index) => (
              <div
                className="relative flex-1 border overflow-hidden max-w-64 md:max-w-80 lg:max-w-full"
                key={index}
              >
                <img
                  src={item.bgImg}
                  alt="bg"
                  className=" absolute top-0 left-0 w-full h-full z-0 "
                />
                <div className=" flex flex-col z-10 text-white w-full px-8 py-7 items-center relative justify-center h-full gap-7 lg:px-16 lg:py-14">
                  <div>{item.icon}</div>
                  <div className=" text-sm lg:text-[1.3rem] font-medium">
                    {item.name}
                  </div>
                  <div className=" text-xs lg:text-base">
                    {item.description}
                  </div>
                  <ButtonPrimary className="w-fit border-none px-4">
                    Read More
                  </ButtonPrimary>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Services;
