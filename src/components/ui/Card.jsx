/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FiMapPin } from "react-icons/fi";

const Card = (props) => {
  return (
    <div className=" flex flex-col w-full">
      <div className=" bg-backGrey-0 px-4 py-10 justify-center flex lg:px-7 lg:py-14 w-full">
        <img
          src={props.image}
          alt="civic"
          className=" w-[238px] h-[120px] lg:w-[338px] lg:h-[169px]"
        />
      </div>
      <div>
        <div className=" flex px-4 py-1 flex-col gap-2">
          <p className=" text-[1.2rem] lg:text-[1.65rem] text-softBlack-0 font-medium">
            {props.name}
          </p>
          <div className=" flex justify-between items-center">
            <p className=" font-bold text-2xl lg:text-3xl ">
              ${props.price}
              <span className=" text-sm text-softGrey-0 font-medium">/Day</span>
            </p>
            <div className=" flex text-softGrey-0 gap-1 items-center">
              <FiMapPin size={18} />
              <p className=" text-base text-softGrey-0">{props.location}</p>
            </div>
          </div>
          <button className="btn bg-primary-0 text-white h-12 w-full mt-2">
            Rent Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
