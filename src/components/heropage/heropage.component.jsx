import React from "react";

import "./heropage.styles.scss";

//components
import ProfilePic from "../profilepic/profilepic.component";
import Intro from "../intro/intro.component";

const HeroPage = () => (
  <div className="hero-page">
    {/* Picture */}
    <ProfilePic />
    {/* Introduction */}
    <Intro />
  </div>
);

export default HeroPage;
