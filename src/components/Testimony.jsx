/* eslint-disable no-unused-vars */
import React from "react";
import CardTesti from "./ui/CardTesti";
import image from "@assets/user.png";
import Wrapper from "./Wrapper";

const Testimony = () => {
  const testimonyUser = [
    {
      name: "Robert Antonio",
      imgUser: image,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Bandung",
    },
    {
      name: "Robert Antonio",
      imgUser: image,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Bandung",
    },
    {
      name: "Robert Antonio",
      imgUser: image,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
      address: "Bandung",
    },
  ];
  return (
    <Wrapper>
      <section className=" flex flex-col px-8 lg:px-24 pt-14">
        <div className=" text-center flex flex-col justify-center gap-3 opacity-70 pb-8">
          <h2 className=" text-2xl text-primary-0 font-bold">Our Review</h2>
          <p className=" text-[27.2px] lg:text-[2.7rem] text-softBlack-0 font-medium">
            That They Say ?
          </p>
          <p className=" text-lg text-softGrey-0">
            Here are some comments from our customers, be one of them.
          </p>
        </div>
        {/* <div className=" flex px-5 justify-around mt-8">
        {testimonyUser.map((item, index) => (
          <CardTesti
            key={index}
            comment={item.comment}
            imgUser={item.imgUser}
            name={item.name}
            address={item.address}
          />
        ))}
      </div> */}
      </section>
    </Wrapper>
  );
};

export default Testimony;
