/* eslint-disable no-unused-vars */
import React from "react";
import bmw from "@brands/BMW.png";
import honda from "@brands/Honda.png";
import hyundai from "@brands/Hyundai.png";
import kia from "@brands/KIA.png";
import lexus from "@brands/Lexus.png";
import marcedes from "@brands/Marcedes.png";
import nissan from "@brands/Nissan.png";
import toyota from "@brands/Toyota.png";

const Partner = () => {
  const brands = [
    {
      imgPath: bmw,
    },
    {
      imgPath: honda,
    },
    {
      imgPath: hyundai,
    },
    {
      imgPath: kia,
    },
    {
      imgPath: lexus,
    },
    {
      imgPath: marcedes,
    },
    {
      imgPath: nissan,
    },
    {
      imgPath: toyota,
    },
  ];
  return (
    <>
      <div className=" flex flex-wrap justify-center gap-7 lg:gap-20 py-20 grayscale opacity-70 px-8">
        {brands.map((item, index) => (
          <img
            src={item.imgPath}
            alt="p"
            key={index}
            className=" w-[50px] lg:w-[72px]"
          />
        ))}
      </div>
    </>
  );
};

export default Partner;
