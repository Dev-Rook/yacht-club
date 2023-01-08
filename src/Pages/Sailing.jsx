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
              programs for all. 
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

      <div className={Styles.Poster_Container}>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FJamaica&showTitle=0&src=ZGV2LnJvb2sxMjFAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uam0jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"  width="100%" height="600" frameborder="0" scrolling="no"></iframe>
      </div>

      <J22Sailing />
      <PinappleCup />
    </div>
  );
};

export default Sailing;
