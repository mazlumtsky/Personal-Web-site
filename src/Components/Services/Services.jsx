import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HardEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Huble from "../../img/humble.png";
import CV from "./CV.pdf";
import { motion } from "framer-motion";
function Services() {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
          Distinctio eveniet magni ducimus magnam ullam dolorum <br /> veniam
          ipsum? Esse, dolor exercitationem?
        </span>
        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "16rem" }}
        >
          <Card
            emoji={HardEmoji}
            heading={"Design"}
            detail={"Bootstrap, Tailwind, Photoshop"}
          />
        </motion.div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML , CSS , JavaScript, React ,Jquery, PHP ,"}
          />
        </div>
        <motion.div
          whileInView={{ left: "12rem", top: "19rem" }}
          transition={transition}
          style={{ top: "19rem", left: "15rem" }}
        >
          <Card
            emoji={Huble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, modi!"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
