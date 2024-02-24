/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import { Hero } from "../components/Hero";
import GoRent from "../components/GoRent";
import Partner from "../components/Partner";
import SampleBrand from "../components/SampleBrand";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import SliderCard from "../components/SliderCard";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import SliderTestimony from "../components/SliderTestimony";
import Wrapper from "../components/Wrapper";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Hero />
      <GoRent />
      <Partner />
      <SampleBrand />
      <Wrapper>
        <div className=" w-full px-8 py-8 overflow-hidden justify-center mx-auto">
          <SliderCard />
        </div>
      </Wrapper>
      <Services />
      <ContactUs />
      <Testimony />
      <Wrapper>
        <div className=" w-full px-8 py-8 overflow-hidden justify-center mx-auto">
          <SliderTestimony />
        </div>
      </Wrapper>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Dashboard;
