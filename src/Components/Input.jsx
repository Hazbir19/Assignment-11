import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    />
  );
};

export default Input;
