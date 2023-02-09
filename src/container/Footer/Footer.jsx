import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50, Ireland</p>
        <p className="p__opensans">+353 1552 4908</p>
        <p className="p__opensans">hello@earthly.ie</p>

      </div>

      <div className="app__footer-links_logo">
        earthly
        <p className="p__opensans">
          &quot;JOIN THE REVOLUTION MAKE IT POSSIBLE.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/wix"><FiFacebook /></a>
          <a href="https://twitter.com/wix"><FiTwitter /></a>
          <a href="https://www.instagram.com/wix/"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h5 className="p__opensans">Ireland Discards more than 200 Million coffee cups a year.
        Join us in our mission towards reducing our Carbon Footprint 
        and making Ireland a Zero-waste Circular Economy.</h5>
      </div>
      
    </div>

    <div className="footer__copyright">
      <p className="p__opensans"> earthly. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
