/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { Waypoint } from "react-waypoint";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/ui/BackToTop";
import CardPoke from "../components/ui/CardPoke";

const Poke = () => {
  const [loading, setLoading] = useState(false);
  const [dataPoke, setDataPoke] = useState([]);
  const [next, setNext] = useState("");

  console.log(dataPoke.length);

  const fetch = async (newUrl) => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    try {
      setLoading(true);
      const result = await axios.get(newUrl ? newUrl : url);
      setTimeout(() => {
        setDataPoke([...dataPoke, ...result.data.results]);
        setNext(result.data.next);
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  const handleNextPage = () => {
    if (next === "" || loading) return;
    fetch(next);
  };

  return (
    <Wrapper>
      <Header />
      <section className="w-full grid grid-cols-4 gap-4 py-10 px-10">
        {dataPoke.map((item, index) => (
          <CardPoke key={index} item={item} />
        ))}
      </section>
      {loading ? (
        <div className=" flex justify-center items-center h-full my-10 mx-auto">
          <div className="w-14 loading h-full text-teal-500 "></div>
        </div>
      ) : (
        <div className="w-full flex p-4 border mt-10">
          <Waypoint onEnter={handleNextPage} />
        </div>
      )}
      <BackToTop />
      <Footer />
    </Wrapper>
  );
};

export default Poke;
