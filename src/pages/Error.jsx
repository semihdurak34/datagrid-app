import React from "react";
import error from "../assets/images/error.gif";

const Error = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={error} alt="" />
    </div>
  );
};

export default Error;
