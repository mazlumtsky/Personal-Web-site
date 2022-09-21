import React from "react";
import "./Intro.css";
import Githup from "../../img/github.png";
import LinkEdIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vectori1 from "../../img/Vector1.png";
import Vectori2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Mazlum Taşkaya</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, <br /> producting the Quality work.
          </span>
        </div>
        <button className=" button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/mazlum-ta%C5%9Fkaya-0a7b71223/">
            <img src={LinkEdIn} alt="" />
          </a>
          <a href="https://github.com/mazlumtsky">
            <img src={Githup} alt="" />
          </a>
          <a href="https://www.instagram.com/mazlumtsky">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vectori1} alt="" />
        <img src={Vectori2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ left: "50%", top: "-4%" }}
          whileInView={{ left: "60%" }}
          transition={transition}
          style={{ top: "-4%", left: "80%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1={"Web"} txt2={"Developer"} />
        </motion.div>
        <motion.div
          initial={{ left: "10rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "7rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1={"Best Design"} txt2={"Award"} />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
