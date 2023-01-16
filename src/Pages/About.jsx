import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/About.module.scss";

import PageHead from "../Components/Main/PageHead";
import History from "../Page-Sections/History";
import HistoricalDocs from "../Page-Sections/HistoricalDocs";

import SuperTramp from "../Assets/Images/SuperTramp.jpeg"

const About = () => {
  TabTitle("MBYC | About");
  return (
    <div className={Styles.Page}>
      <PageHead Image={SuperTramp} Title={"Indulge In Our History"} />

      <History />
      <HistoricalDocs />
    </div>
  );
};

export default About;
