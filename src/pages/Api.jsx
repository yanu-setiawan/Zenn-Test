/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  deleteBook,
  getAllBook,
  getBookByCtg,
  getCategories,
} from "../configs/https";
import { FaSearch, FaTrash, FaPencilAlt, FaPlus } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

import Header from "../components/Header";
import ModalAddCtg from "../components/ModalAddCtg";
import ModalEditCtg from "../components/ModalEditCtg";
import Wrapper from "../components/Wrapper";
import { Waypoint } from "react-waypoint";
import BackToTop from "../components/ui/BackToTop";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [valSearch, setValSearch] = useState("");
  const [valSort, setValSort] = useState("asc");
  const [valMin, setValMin] = useState(0);
  const [valMax, setValMax] = useState(1000);
  const [minYear, setMinYear] = useState(1888);
  const [maxYear, setMaxYear] = useState(2025);
  const [limit, setLimit] = useState(10);
  const [dataCtg, setdataCtg] = useState([]);
  const [modal, setModal] = useState(false);

  const handleModalAdd = () => {
    setModal(true);
  };

  const succesAddCtg = () => {
    setModal(false);
    getCategory();
  };

  const onChangeSearch = (e) => {
    setValSearch(e.target.value);
  };

  const handleNavigate = (link) => {
    navigate(link);
  };

  const onChangeSort = (e) => {
    setValSort(e.target.value);
  };

  const onChangeMinPage = (e) => {
    setValMin(e.target.value);
  };
  const onChangeMaxPage = (e) => {
    setValMax(e.target.value);
  };
  const onChangeMinYear = (e) => {
    setMinYear(e.target.value);
  };
  const onChangeMaxYear = (e) => {
    setMaxYear(e.target.value);
  };

  const getCategory = async () => {
    try {
      const result = await getCategories();
      setdataCtg(result.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleGetByCtg = async (params) => {
    if (params === 0) {
      setActiveCategory(params);
      return setData(defaultData);
    }
    try {
      setIsLoading(true);
      const result = await getBookByCtg(params);
      console.log(result.data);
      setData(result.data.data);
      setActiveCategory(params);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rupiah = (number) => {
    if (number) {
      return `Rp. ${number
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
    }
  };

  const fetch = async (isNextPage) => {
    const body = {
      search: valSearch,
      order: valSort,
      minPage: valMin,
      maxPage: valMax,
      minYear: minYear,
      maxYear: maxYear,
      limit: limit,
    };
    try {
      setIsLoading(true);
      const result = await getAllBook(body);
      if (isNextPage) setData([...data, ...result.data.data]);
      else setData(result.data.data);
      setDefaultData(result.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#14B8A6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deleteBook(id);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        fetch();
      }
    } catch (error) {
      console.error("Error deleting:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete the file.",
        icon: "error",
      });
    }
  };

  const handleNextPage = () => {
    if (data.length < 1) return;
    fetch(true);
  };

  useEffect(() => {
    fetch();
    getCategory();
  }, [valSearch, valSort, valMin, valMax, minYear, maxYear]);
  return (
    <>
      {modal && <ModalAddCtg modal={modal} setModal={succesAddCtg} />}
      <Wrapper>
        <Header />
        <main className=" flex h-full w-full flex-col pb-16">
          <section className=" flex px-8 mt-8 flex-wrap gap-5">
            <div className="relative">
              <FaSearch
                className=" absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search here..."
                className="border-2 border-gray-300 justify-center items-center text-lg  hover:border-gray-400 focus:outline-none appearance-none bg-[#EFEEEE] rounded-xl h-[44.8px] pl-10 pr-10"
                onChange={onChangeSearch}
              />
            </div>

            <div className=" flex items-center gap-2">
              <p>Sort By</p>
              <select
                className=" select select-bordered select-sm h-[44.8px]"
                onChange={onChangeSort}
              >
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
              </select>
            </div>

            <div className="relative gap-4 flex m-0 lg:ml-4">
              <input
                type="text"
                placeholder="Min Page"
                className="border-2 w-[170px] border-gray-300 justify-center items-center text-lg  hover:border-gray-400 focus:outline-none appearance-none bg-[#EFEEEE] rounded-xl h-[44.8px] px-10"
                onChange={onChangeMinPage}
              />
              <input
                type="text"
                placeholder="Max Page"
                className="border-2 w-[170px] border-gray-300 justify-center items-center text-lg  hover:border-gray-400 focus:outline-none appearance-none bg-[#EFEEEE] rounded-xl h-[44.8px] px-10"
                onChange={onChangeMaxPage}
              />
            </div>
            <div className="relative gap-4 flex  m-0 lg:ml-4">
              <input
                type="text"
                placeholder="Min Year"
                className="border-2 w-[170px] border-gray-300 justify-center items-center text-lg  hover:border-gray-400 focus:outline-none appearance-none bg-[#EFEEEE] rounded-xl h-[44.8px] px-10"
                onChange={onChangeMinYear}
              />
              <input
                type="text"
                placeholder="Max Year"
                className="border-2 w-[170px] border-gray-300 justify-center items-center text-lg  hover:border-gray-400 focus:outline-none appearance-none bg-[#EFEEEE] rounded-xl h-[44.8px] px-10"
                onChange={onChangeMaxYear}
              />
            </div>
          </section>

          <div className=" flex gap-4 lg:ml-auto mt-12 px-8">
            <button
              className=" btn btn-success text-white font-bold "
              onClick={() => handleModalAdd()}
            >
              New Categories <FaPlus />
            </button>
            <button
              className=" btn btn-info text-white font-bold "
              onClick={() => handleNavigate("/create-book")}
            >
              New Book <FaPlus />
            </button>
          </div>

          <section className="w-full flex flex-wrap gap-y-5 px-8  gap-x-3  items-center  mt-10">
            <CategoryComponent
              activeCategory={activeCategory}
              item={{ name: "All", id: 0 }}
              handleGetByCtg={handleGetByCtg}
              updateCtg={getCategory}
            />
            {dataCtg.length > 0 &&
              dataCtg.map((item, index) => (
                <CategoryComponent
                  key={index}
                  activeCategory={activeCategory}
                  item={item}
                  handleGetByCtg={handleGetByCtg}
                  updateCtg={getCategory}
                />
              ))}
          </section>
          <div className="w-full my-5 flex flex-col justify-center items-center">
            <section className=" w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-7 gap-y-12 px-8 pt-6">
              {data.length > 0 &&
                data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col  w-full gap-1 relative  text-left"
                  >
                    <>
                      <button
                        className=" btn btn-error absolute top-0 left-0 text-white font-semibold "
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </>

                    <div className="border rounded-l-sm rounded-r-[15px] overflow-hidden w-[150px] h-56 md:w-max md:h-80 ">
                      <img
                        src={item.image}
                        alt=""
                        className=" h-full object-cover "
                      />
                    </div>
                    <p className=" font-bold mt-2 text-base font-book">
                      {item.title}
                    </p>
                    <p className="hidden-text-4-line text-xs">
                      {item.description}
                    </p>
                    <div className=" flex flex-col text-[#424464] text-sm font-medium font-book mt-3">
                      <div>
                        <p className=" text-[#424464] text-[14px] font-medium">
                          Thickness : {item.thickness}
                        </p>
                      </div>
                      <div className=" flex flex-col text-[14px]">
                        <p>Page : {item.total_page}</p>
                        <p>Release : {item.release_year}</p>
                      </div>
                      <div className=" flex flex-col">
                        <p className="text-[#424464] text-base font-semibold">
                          {rupiah(item.price) || "Rp.0"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </section>
            {loading ? (
              <div className=" flex justify-center items-center h-full my-10">
                <div className="w-14 loading h-full text-teal-500 "></div>
              </div>
            ) : (
              <div className="w-full flex p-4 border">
                <Waypoint onEnter={handleNextPage} />
              </div>
            )}
          </div>
        </main>
        <Footer />
      </Wrapper>
      <BackToTop />
    </>
  );
};

function CategoryComponent({
  item,
  handleGetByCtg,
  updateCtg,
  activeCategory,
}) {
  const [isModalCtg, setModalCtg] = useState(false);
  const successEditCtg = () => {
    setModalCtg(false);
    updateCtg();
  };

  return (
    <>
      <ModalEditCtg
        modal={isModalCtg}
        dataEditCtg={item.name}
        setModal={successEditCtg}
        id={item.id}
      />
      <div className="flex gap-5 relative">
        {item.id != 0 && (
          <>
            <button
              className=" btn-success btn btn-xs absolute top-[-13px] right-0 text-white font-semibold border-2 border-white"
              onClick={() => setModalCtg(true)}
            >
              <FaPencilAlt size={12} />
            </button>
          </>
        )}
        <button
          className={`btn  btn-sm h-[35px] w-20 lg:w-28 ${
            activeCategory === item.id
              ? "btn-success !text-white"
              : "btn-outline btn-success hover:!text-white"
          }`}
          onClick={() => handleGetByCtg(item.id)}
        >
          <p className=" text-xs lg:text-base">{item.name}</p>
        </button>
      </div>
    </>
  );
}

export default Home;
