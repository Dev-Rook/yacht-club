import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/About.module.scss";

import History from "../Page-Sections/History";

const About = () => {
  TabTitle("MBYC | About");
  return (
    <div className={Styles.Page}>
      {/* <PageHead /> */}
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>About</div>
        <div className={Styles.Diffuser}></div>
        <img src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assests/Images/Cayman-Spinnaker.jpg?raw=true`} alt="" className={Styles.Header_Image} />
      </div>

      <History />
    </div>
  );
};

export default About;