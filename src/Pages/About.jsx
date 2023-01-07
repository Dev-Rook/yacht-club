import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/About.module.scss";

import History from "../Page-Sections/History";
import HistoricalDocs from "../Page-Sections/HistoricalDocs";

const About = () => {
  TabTitle("MBYC | About");
  return (
    <div className={Styles.Page}>
      {/* <PageHead /> */}
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>About</div>
        <div className={Styles.Diffuser}></div>
        <img src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/Floaters.jpeg?raw=true`} alt="" className={Styles.Header_Image} />
      </div>

      <History />
      <HistoricalDocs />
    </div>
  );
};

export default About;
