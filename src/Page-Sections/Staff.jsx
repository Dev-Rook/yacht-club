import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Staff.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import StaffData from "../Assets/Data/Staff.json";

const Staff = () => {
  const [data, setData] = useState(StaffData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <p className={Styles.Small_Text}>Commitee / Management</p>
          <p className={Styles.Large_Text}>Club Officials</p>

          <button className={Styles.Staff_Button}>View All</button>
        </div>

        <div className={Styles.Diffuser}></div>

        <div className={Styles.Slider_Container}>
          <Swiper
            slidesPerView={4}
            speed={2000}
            spaceBetween={0}
            modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            loop
            pagination={{
              dynamicBullets: true,
            }}
            mousewheel={true}
            className={Styles.Swiper}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 3,
              },
              996: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
          >
            {data &&
              data.map((value) => {
                return (
                  <SwiperSlide key={value?.id}>
                    <Link to={""} className={Styles.Link}>
                      <div className={Styles.Project_Card}>
                        <div className={Styles.Text_Container}>
                          <p className={Styles.Name}>{value?.First_Name} {value?.Last_Name}</p>
                          <p className={Styles.Title}>{value?.Title}</p>
                        </div>
                        <div className={Styles.Diffuser}></div>
                        <div className={Styles.Image_Container}>
                          <img
                            src={value.Image}
                            alt=""
                            className={Styles.Image}
                          />
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Staff;
