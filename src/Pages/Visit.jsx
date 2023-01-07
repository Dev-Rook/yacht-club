import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Visit.module.scss";

import UsefulInfo from "../Page-Sections/UsefulInfo";
import Arrival from "../Page-Sections/Arrival";
import Berthing from "../Page-Sections/Berthing";
import Rates from "../Components/Secondary/Rates";

const Visit = () => {
  TabTitle("MBYC | Visit");

  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>Visit</div>
        <div className={Styles.Diffuser}></div>
        <img
          src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/Page%20Header%20Images/Nautical-Chart-2.jpg?raw=true`}
          alt=""
          className={Styles.Header_Image}
        />
      </div>

      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}>Visitor Information</p>
            <p className={Styles.Brand}>Inform Before Arrival</p>
            <p className={Styles.Description}>
              The Montego Bay Yacht Club is located on the Freeport Peninsula
              with berthing in the protected basin that forms the Montego Bay
              Harbour. General office opening hours are from: 9:00 am to 6:00
              pm.
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
      </div>

      <Arrival />
      <Berthing />
      <Rates />
      <UsefulInfo />
    </div>
  );
};

export default Visit;
