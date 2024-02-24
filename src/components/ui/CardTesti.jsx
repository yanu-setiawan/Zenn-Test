/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import star from "@assets/stars.png";

const CardTesti = (props) => {
  return (
    <div className=" bg-white px-6 py-6 flex flex-col gap-6 shadow-sm shadow-softGrey-0 rounded-lg w-full">
      <div className=" flex flex-col gap-3">
        <img src={star} alt="star" className=" w-full" />
        <p className=" text-xs md::text-sm text-softGrey-0">{props.comment}</p>
      </div>
      <div className=" flex gap-4 items-center">
        <img src={props.imgUser} alt="user" className=" w-10 lg:w-16" />
        <div className=" flex flex-col gap-0 lg:gap-2">
          <p className=" text-base lg:text-lg text-softBlack-0 font-bold">
            {props.name}
          </p>
          <p className=" text-sm lg:text-base text-softGrey-0">
            {props.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTesti;
