import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Sailing.module.scss";

import J22Sailing from "../Page-Sections/J22Sailing";
import PinappleCup from "../Page-Sections/PinappleCup";

const Sailing = () => {
  TabTitle("MBYC | Sailing");
  return (
    <div className={Styles.Page}>
      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}></p>
            <p className={Styles.Brand}>Sailing</p>
            <p className={Styles.Description}>
              The Montego Bay Yacht Club maintains an active calendar of
              sailing, both racing and cruising, as well as sailing training
              programs for all. Please click on one of the links below for more
              details..
            </p>
          </div>
          <div className={Styles.Image_Container}>
            <img
              src={
                "https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/Page%20Header%20Images/Defender-Upwind-Border-5.jpg?raw=true"
              }
              alt=""
              className={Styles.Image}
            />
          </div>
        </div>
      </div>

      <J22Sailing />
      <PinappleCup />
    </div>
  );
};

export default Sailing;
