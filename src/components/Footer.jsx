/* eslint-disable no-unused-vars */
import React from "react";
import { FaBook, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "@assets/logoO.svg";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="flex flex-col md:flex-row justify-between px-8  py-10 bg-white text-softGrey-0">
        <div className="left-foot-content flex flex-col gap-[22px]">
          <div className="logo-detail flex gap-3">
            <img src={logo} alt="logo" />
          </div>
          <p className="about-detail text-softGrey-0 max-w-[20rem] font-medium ">
            We are a well-known car rental service that has many partners in
            each region to connect with you to assist in your trip in meetings,
            events, holidays or long trips.
          </p>
          <div className="flex gap-4 pb-3 text-primary-0">
            <div className="box">
              <FaFacebook size={24} />
            </div>

            <div className="box">
              <FaTwitter size={24} />
            </div>
            <div className="box">
              <FaInstagram size={24} />
            </div>
          </div>
          <p className="copyright font-book font-bold ">©2024 ORENNN</p>
        </div>
        <div className="right-foot-content flex gap-9 md:gap-7 lg:gap-16 xl:gap-24 ">
          <div className="content-detail flex-col gap-3">
            <h2 className="font-bold pb-4 text-xl">Product</h2>
            <ol className="flex flex-col gap-4  text-greyFont">
              <li className=" cursor-pointer ">Download</li>
              <li className=" cursor-pointer hover:text-yellow">Pricing</li>
              <li className=" cursor-pointer hover:text-yellow">Locations</li>
              <li className=" cursor-pointer hover:text-yellow">Contries</li>
              <li className=" cursor-pointer hover:text-yellow">Blog</li>
            </ol>
          </div>
          <div className="content-detail">
            <h2 className="font-bold pb-4 text-xl">Engage</h2>
            <ol className="flex flex-col gap-4  text-greyFont">
              <li className=" cursor-pointer hover:text-yellow">Cars</li>
              <li className=" cursor-pointer hover:text-yellow">FAQ</li>
              <li className=" cursor-pointer hover:text-yellow">About Us</li>
              <li className=" cursor-pointer hover:text-yellow">
                Privacy Policy
              </li>
              <li className=" cursor-pointer hover:text-yellow">
                Terms of Service
              </li>
            </ol>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
