import React from "react";

const Container = ({ children }) => {
  return (
    <div className="p-4 pt-24 grid grid-cols-1 h-screen justify-center">
      {children}
    </div>
  );
};

export default Container;
