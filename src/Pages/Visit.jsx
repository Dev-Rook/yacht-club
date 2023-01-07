import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/About.module.scss";

const Visit = () => {
  TabTitle("MBYC | Visit");
  return (
    <div className={Styles.Page}>
      {/* <PageHead /> */}
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>Visit</div>
        <div className={Styles.Diffuser}></div>
        <img
          src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assests/Images/Page%20Header%20Images/Nautical-Chart.jpg?raw=true`}
          alt=""
          className={Styles.Header_Image}
        />
      </div>
    </div>
  );
};

export default Visit;
