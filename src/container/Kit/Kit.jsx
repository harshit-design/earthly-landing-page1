import React from "react";
import { images } from "../../constants";
import "./Kit.css";

const Kit = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.kit} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
          Making conscious consumer choices, such as using
           reusable bags and containers, can have a positive impact on the environment.
           </p>
        </div>
        <p className="p__opensans">
          {" "}
          we believe in promoting and supporting products made from environmentally 
          friendly materials. We understand that our actions and choices as consumers 
          can have a significant impact on the environment and the future of our planet.
           That's why we are committed to promoting sustainable and eco-friendly products 
           that help reduce waste, conserve resources, and minimize harm to the environment..{" "}
        </p>
      </div>
    </div>
  </div>
);

export default Kit;
