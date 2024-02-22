/* eslint-disable no-unused-vars */
import React from "react";
import logo from "@assets/logoO.svg";

const Header = () => {
  return (
    <>
      <section className=" flex mx-24 justify-between items-center mt-10 text-softBlack-0 text-lg font-medium">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className=" flex gap-8 ">
            <li>About</li>
            <li>Car</li>
            <li>Become Partner</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
