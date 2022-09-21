import React from "react";
import "./Footor.css";
import Wave from "../../img/wave.png";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";
function Footor() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>taskayamazlum@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/mazlumtsky">
            <FaInstagram color="white" size="2.5rem" />
          </a>
          <a href="https://tr-tr.facebook.com/mazlumtaskaya">
            <FaFacebookSquare color="#3b5998" size="2.5rem" />
          </a>
          <a href="https://github.com/mazlumtsky">
            <FaGithubSquare color="#171515" size="2.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footor;
