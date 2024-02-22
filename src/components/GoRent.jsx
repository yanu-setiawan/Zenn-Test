/* eslint-disable no-unused-vars */
import React from "react";
import { FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

function GoRent() {
  const detailRent = [
    {
      type: "Pickup",
      point: "Point Location",
      icon: <FiMapPin size={20} />,
    },
    {
      type: "Drop Off",
      point: "Point Location",

      icon: <FiMapPin size={20} />,
    },
    {
      type: "Estimate Time",
      point: "Point Location",
      icon: <FiClock size={20} />,
    },
    {
      type: "Pricing",
      point: "0.00",
      icon: <FiDollarSign size={20} />,
    },
  ];
  return (
    <>
      <section className=" bg-secondary-0 py-12 px-36 flex flex-col">
        <div className=" flex bg-white w-fit px-4 py-2 gap-5 font-medium text-softGrey-0 cursor-pointer text-base">
          <div className=" px-2 text-primary-0 font-semibold cursor-pointer">
            Instant Rent
          </div>
          <div className=" border-x-2 px-3 cursor-pointer">Private Driver</div>
          <div>Long Trip</div>
        </div>
        <div className="bg-white px-12 py-9 flex items-center justify-around">
          {detailRent.map((item, index) => (
            <div
              className="text-base gap-4 flex flex-col text-softGrey-0"
              key={index}
            >
              <p>{item.type}</p>
              <div className="flex items-center gap-4 grayscale opacity-65">
                {item.icon}
                {item.point}
              </div>
            </div>
          ))}
          <button className="btn bg-primary-0 text-white h-12 w-40 ">
            Rent Now!
          </button>
        </div>
      </section>
    </>
  );
}

export default GoRent;
