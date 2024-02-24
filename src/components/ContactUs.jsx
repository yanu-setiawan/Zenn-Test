/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { FiClock, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import GoogleMaps from "@assets/Google.png";
import ButtonPrimary from "./ui/ButtonPrimary";
import Wrapper from "./Wrapper";

const ContactUs = () => {
  const apikey = import.meta.env.VITE_API_KEY;
  const contact = [
    {
      icon: <FiMail size={24} />,
      name: "yanusetiawan@gmail.com",
    },
    {
      icon: <FiPhone size={24} />,
      name: "+62 827 737 899",
    },
    {
      icon: <FiClock size={24} />,
      name: "EveryDay : 08.00 - 21.00",
    },
    {
      icon: <FiClock size={24} />,
      name: "Tangerang Selatan , Indonesia 41222",
    },
  ];

  const social = [
    {
      gambar: <FaFacebook size={24} />,
    },
    {
      gambar: <FaInstagram size={24} />,
    },
    {
      gambar: <FaTwitter size={24} />,
    },
    {
      gambar: <FaLinkedin size={24} />,
    },
  ];

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const libraries = ["places"];

  const center = {
    lat: -6.887241287243613,
    lng: 111.65701392293714,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apikey,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <>
      <Wrapper>
        <section className=" w-full px-8  flex flex-col gap-10 xl:flex-row py-10 lg:py-20 justify-between">
          <div className=" flex flex-col gap-6 xl:gap-10 lg:flex-1 xl:text-left text-center">
            <div className=" flex flex-col gap-2">
              <h2 className=" text-primary-0 text-2xl font-bold">
                Get In Touch
              </h2>
              <p className=" text-softBlack-0 text-[27.5px] lg:text-[43px] font-medium">
                Contact Us
              </p>
              <p className=" text-lg text-softGrey-0">
                if you need consultation with us, you can write a message or
                call <br />
                us, we will respond as quickly as possible
              </p>
            </div>
            {contact.map((item, index) => (
              <div
                key={index}
                className=" flex gap-3 text-base xl:text-lg font-medium items-center xl:justify-start justify-center"
              >
                <div className=" text-primary-0">{item.icon}</div>
                <div className=" text-softBlack-0">{item.name}</div>
              </div>
            ))}
            <div className="flex gap-3 mt-auto justify-center xl:justify-start">
              {social.map((item, index) => (
                <div
                  className="p-2 border rounded-sm border-primary-0 bg-white hover:bg-primary-0 text-primary-0 hover:text-white cursor-pointer"
                  key={index}
                >
                  <div className="">{item.gambar}</div>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex lg:flex-1 flex-col gap-10">
            <div className=" h-[400px] w-full">
              <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={20}
                center={center}
              >
                <Marker position={center} />
              </GoogleMap>
            </div>
            <div className=" flex w-full justify-center lg:justify-start mt-0 xl:mt-auto">
              <ButtonPrimary className=" border-none px-10 text-lg w-fit !min-h-14 items-center">
                Office Center Map
              </ButtonPrimary>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default ContactUs;
