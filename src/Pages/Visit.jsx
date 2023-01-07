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
      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}></p>
            <p className={Styles.Brand}>Visitor Information</p>
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
