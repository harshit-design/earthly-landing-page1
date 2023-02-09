import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter"
  id="Newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="JOIN THE CLUB" />
      <h1 className="headtext__cormorant">Join our emaill list and get access to
       special deals exclusive to our subscribers</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">
        Join
      </button>
    </div>
  </div>
);

export default Newsletter;
