/* eslint-disable no-unused-vars */
import React from "react";
import ButtonPrimary from "./ui/ButtonPrimary";
import Wrapper from "./Wrapper";

const Subscribe = () => {
  return (
    <div className=" flex flex-col bg-secondary-0 px-24 w-full py-16 mt-20 mb-14 gap-8">
      <Wrapper>
        <div className=" flex flex-col gap-6 text-center justify-center opacity-80 pb-4">
          <h2 className=" text-xl lg:text-4xl text-softBlack-0 font-bold">
            SUBSCRIBE OUR NEWS
          </h2>
          <p className=" text-sm lg:text-base text-softGrey-0 ">
            We can help you provide the latest news whenever and wherever you
            are via email
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center gap-5">
          <input
            type="text"
            className=" h-14 bg-white px-6 lg:w-[40%] w-full"
            placeholder="exampleEmail@gmail.com"
          />
          <ButtonPrimary className="px-4 !h-14">Subscribe</ButtonPrimary>
        </div>
      </Wrapper>
    </div>
  );
};

export default Subscribe;
