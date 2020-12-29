import React from "react";
import "./intro.styles.scss";

//components
import CustomBtn from "../custombutton/custombutton.component";

const Intro = () => (
  <div className="intro-styles">
    {/* header */}
    <p className="intro-header">
      hi. i'm <span>taiwo oduola</span>
    </p>

    {/* body */}
    <p className="intro-content">
      I design and code beautifully simple things, <br />
      and I love what I do..
    </p>

    {/* custom button */}
    <CustomBtn> learn about what i do </CustomBtn>
  </div>
);

export default Intro;
