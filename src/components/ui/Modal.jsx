/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const ModalDetail = ({ link, isOpen, onClose }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const result = await axios.get(link);
      setData(result.data);

      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetch();
    }
  }, [isOpen]);

  return (
    isOpen && (
      <section
        className=" fixed top-0 left-0 backdrop-blur-sm grid place-content-center w-screen h-screen bg-slate-500/20"
        onClick={onClose}
      >
        <div className=" w-full max-w-xl p-4 bg-white rounded-box flex flex-col">
          {loading ? (
            <div className=" flex justify-center items-center h-full my-10">
              <div className="w-14 loading h-full text-teal-500 "></div>
            </div>
          ) : (
            <>
              <div>{data.name}</div>
              <div>status :</div>
              {data.stats &&
                data.stats.map((stats, index) => (
                  <div key={index}>
                    {stats.stat.name}: {stats.base_stat}
                  </div>
                ))}
            </>
          )}
        </div>
      </section>
    )
  );
};

export default ModalDetail;
