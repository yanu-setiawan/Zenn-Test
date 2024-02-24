/* eslint-disable no-unused-vars */
import React from "react";
import { FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import ButtonPrimary from "./ui/ButtonPrimary";
import Wrapper from "./Wrapper";

function GoRent() {
  const detailRent = [
    {
      type: "Pickup",
      point: "Point Location",
      icon: <FiMapPin />,
    },
    {
      type: "Drop Off",
      point: "Point Location",

      icon: <FiMapPin />,
    },
    {
      type: "Estimate Time",
      point: "Point Location",
      icon: <FiClock />,
    },
    {
      type: "Pricing",
      point: "0.00",
      icon: <FiDollarSign />,
    },
  ];
  return (
    <>
      <section className=" bg-secondary-0 lg:py-12 py-7  flex flex-col z-10 relative">
        <Wrapper>
          <div className=" flex bg-white mx-auto lg:mx-0 w-fit  px-2 lg:px-4 py-2 gap-5 font-medium text-softGrey-0 cursor-pointer text-sm lg:text-base">
            <div className=" px-2 text-primary-0 font-semibold cursor-pointer">
              Instant Rent
            </div>
            <div className=" border-x-2 px-3 cursor-pointer">
              Private Driver
            </div>
            <div>Long Trip</div>
          </div>
          <div className="bg-white px-2 lg:px-12 pt-9 pb-6 lg:pb-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-5 lg:justify-between z-10">
            <div className=" flex w-full justify-around">
              {detailRent.map((item, index) => (
                <div
                  className="text-base gap-4 flex flex-col text-softGrey-0 w-full"
                  key={index}
                >
                  <p className=" text-sm lg:text-base text-center lg:text-left">
                    {item.type}
                  </p>
                  <div className=" text-xs lg:text-base flex flex-col lg:flex-row items-center gap-1 lg:gap-3 grayscale opacity-65">
                    <div className=" text-sm lg:text-xl">{item.icon}</div>
                    <div>{item.point}</div>
                  </div>
                </div>
              ))}
            </div>
            <ButtonPrimary className="">Rent Now!</ButtonPrimary>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default GoRent;
