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

      <History />
      <HistoricalDocs />
    </div>
  );
};

export default About;
