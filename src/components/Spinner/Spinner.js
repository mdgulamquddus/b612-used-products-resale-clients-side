import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#eab308"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
