import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import porofilePic1 from "../../img/profile1.jpg";
import porofilePic2 from "../../img/profile2.jpg";
import porofilePic3 from "../../img/profile3.jpg";
import porofilePic4 from "../../img/profile4.jpg";
import porofilePic5 from "../../img/profile5.jpg";
import porofilePic6 from "../../img/profile6.jpg";
import "./Testimonials.css";
import "swiper/css/pagination";
import "swiper/css";
function Testimonials() {
  const clients = [
    {
      img: porofilePic1,
      review:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ut labore et dolore magna aliqua. Ut enim",
    },
    {
      img: porofilePic2,
      review:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ut labore et dolore magna aliqua. Ut enim",
    },
    {
      img: porofilePic3,
      review:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ut labore et dolore magna aliqua. Ut enim",
    },
    {
      img: porofilePic4,
      review:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ut labore et dolore magna aliqua. Ut enim",
    },
    {
      img: porofilePic5,
      review:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ut labore et dolore magna aliqua. Ut enim",
    },
    {
      img: porofilePic6,
      review:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ut labore et dolore magna aliqua. Ut enim",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exeptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
