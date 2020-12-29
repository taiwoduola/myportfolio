import React from "react";
import "./nav.styles.scss";

//components
import NavOptions from "../navoptions/navoptions.component";

const Nav = () => (
  <div className="nav-styles">
    {/* nav options */}
    <NavOptions text="top" />
    <NavOptions text="work" />
    <NavOptions text="portfolio" />
    <NavOptions text="contact" />
  </div>
);

export default Nav;
