import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/About.module.scss";

import AboutHeader from "../Components/Carousel/AboutHeader";
import History from "../Page-Sections/History";
import HistoricalDocs from "../Page-Sections/HistoricalDocs";

const About = () => {
  TabTitle("MBYC | About");
  return (
    <div className={Styles.Page}>
      <AboutHeader />
      {/* <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}></p>
            <p className={Styles.Brand}>About</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fuga ipsum vitae rem harum ad reiciendis voluptatum porro totam
              aspernatur!
            </p>
          </div>
          <div className={Styles.Image_Container}>
            <img
              src={
                "https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/SuperTramp.jpeg?raw=true"
              }
              alt=""
              className={Styles.Image}
            />
          </div>
        </div>
      </div> */}

      <History />
      <HistoricalDocs />
    </div>
  );
};

export default About;
