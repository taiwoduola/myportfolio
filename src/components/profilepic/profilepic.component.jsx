import React from "react";
import "./profilepic.styles.scss";

//images
import Image1 from "../../images/altumcode-ZW1vjQJZmCo-unsplash.jpg";

const ProfilePic = () => (
  <div
    style={{
      backgroundImage: `url(${Image1})`,
    }}
    className="profile-image"
  />
);

export default ProfilePic;
