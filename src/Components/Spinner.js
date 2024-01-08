import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center mx-auto my-auto items-center space-y-3">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;

