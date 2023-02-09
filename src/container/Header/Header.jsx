import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Look deep into nature" />
      <h1 className="app__header-h1">The Key To better environment</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Sourced from local farmers, plant residue from Wheat, Barley, and Bamboo is molded into durable cups using our proprietary technology.{" "}
      </p>
      <button type="button" className="custom__button"><a href="https://www.earthly.ie/shop-1">
        Explore Items</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.first} alt="header_img" />
    </div>
  </div>
);

export default Header;
