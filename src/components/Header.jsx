/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "@assets/logoO.svg";
import Wrapper from "./Wrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleActive = (e) => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  return (
    <>
      <Wrapper className=" overflow-x-hidden overflow-y-visible">
        <section className=" flex justify-between px-8 xl:px-0 items-center mt-10 text-softBlack-0 text-lg font-medium">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={`hidden lg:flex lg:flex-col`}>
            <ul className=" flex gap-14 ">
              <li className=" cursor-pointer hover:text-primary-0">About</li>
              <Link to="/Poke">
                <li className=" cursor-pointer hover:text-primary-0">API</li>
              </Link>
              <li className=" cursor-pointer hover:text-primary-0">
                Become Partner
              </li>

              <li className=" cursor-pointer hover:text-primary-0">
                Contact Us
              </li>
            </ul>
          </div>

          <button className=" lg:hidden" onClick={toggleActive}>
            <GiHamburgerMenu size={30} />
          </button>

          <div
            className={` fixed ${
              active ? "right-0" : "-right-full"
            } top-0 w-screen h-screen flex flex-col transition-all duration-500 backdrop-blur-sm z-50`}
            onClick={toggleActive}
          >
            <div
              className=" flex flex-col w-3/5 p-8 bg-white ml-auto h-full gap-10 "
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className=" border-b-2 border-softGrey-0 border-opacity-30 pb-4">
                <img src={logo} alt="logo" />
              </div>
              <ul className=" flex flex-col gap-6">
                <li className=" cursor-pointer hover:text-primary-0">About</li>

                <Link to="/Api">
                  <li className=" cursor-pointer hover:text-primary-0">API</li>
                </Link>
                <li className=" cursor-pointer hover:text-primary-0">
                  Become Partner
                </li>

                <li className=" cursor-pointer hover:text-primary-0">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Header;
