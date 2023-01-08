import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Fishing.module.scss";

const Fishing = () => {
  TabTitle("MBYC | Fishing");
  return (
    <div className={Styles.Page}>
      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}></p>
            <p className={Styles.Brand}>Fishing</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              consectetur? Voluptates placeat nesciunt rem doloribus quae eos
              libero eveniet et.
            </p>
          </div>
          <div className={Styles.Image_Container}>
            <img
              src={
                "https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/Fishing-Reel.jpeg?raw=true"
              }
              alt=""
              className={Styles.Image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fishing;
