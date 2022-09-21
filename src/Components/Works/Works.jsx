import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion"
function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Branda & Clients</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Distinctio eveniet magni ducimus magnam ullam dolorum <br /> veniam
          ipsum? Esse, dolor exercitationem?
        </span>
        <a>
          <button className="button s-button">Hire me</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div 
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:"-40px"}}
        transition={{duration:3.5,type:"spring"}}
        className="w-mainCircle">
          <div className="w-secCirecle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCirecle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCirecle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCirecle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCirecle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
