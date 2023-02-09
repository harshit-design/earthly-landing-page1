import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        It’s high time for all of us to think about our impression and capacity 
        to lessen the waste and its impacts on the climate. This must be finished 
        by settling on a responsible choice of utilizing eco-friendly products.
        </p>
        <button type="button" className="custom__button"><a href="https://www.earthly.ie/">
          Know More</a>
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Products</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        <ul>
          <li>Plant Based Reusable Cups</li>
          <li>Bamboo Straws</li>
          <li>Bamboo Thoothbrush</li>
          <li>Plant Based Reusable Containers</li>
        </ul>
        </p>
        <button type="button" className="custom__button"><a href="https://www.earthly.ie/shop-1">
          Know More</a>
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
