import React from "react";

// gif
import spinner from "../../public/assets/gif/spinner.gif";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={spinner} alt="spinner" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
