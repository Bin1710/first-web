import React from "react";
import bannerImage from "../../assets/banner.png";
import '../Banner/banner.css'
const banner = () => {
  return (
    <div>
      <a href="https://google.com">
      <img className="responsive" src={bannerImage}/>
      </a>
    </div>
  );
};

export default banner;
