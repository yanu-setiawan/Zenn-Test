/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ButtonPrimary = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`btn bg-primary-0 text-white min-h-12 px-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
