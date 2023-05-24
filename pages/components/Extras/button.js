import React from "react";

const Button = ({ children }) => {
  return (
    <button className="sm:inline-flex sm:w-fit items-center font-mono border text-sm border-yellow-900 px-4 py-2 m-8 rounded-md hover:bg-yellow-900 hover:bg-opacity-10">
      {children}
    </button>
  );
};

export default Button;
