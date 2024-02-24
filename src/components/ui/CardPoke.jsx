/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ModalDetail from "./Modal";

const CardPoke = ({ item }) => {
  const [isModalOp, setIsmodalOp] = useState(false);
  return (
    <>
      <ModalDetail
        isOpen={isModalOp}
        onClose={() => setIsmodalOp(!isModalOp)}
        link={item.url}
      />
      <div className=" flex-1 aspect-square border-2 rounded-sm flex flex-col items-center justify-evenly" onClick={() => setIsmodalOp(true) }>
        <div className=" w-3/5 aspect-square rounded-full border-2 grid place-content-center text-5xl font-bold bg-secondary-0">
          {item.name[0]}
        </div>
        <div className=" font-medium p-2">{item.name}</div>
      </div>
    </>
  );
};

export default CardPoke;
