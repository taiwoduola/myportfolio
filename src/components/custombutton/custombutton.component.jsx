import React from "react";
import "./custombutton.styles.scss";

const CustomBtn = ({ children, learnBtn }) => (
  <button className={`custom-btn ${learnBtn ? "learn-btn" : null} `}>
    {" "}
    {children}{" "}
  </button>
);

export default CustomBtn;
