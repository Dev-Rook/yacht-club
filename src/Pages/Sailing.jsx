import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Sailing.module.scss";

const Sailing = () => {
  TabTitle("MBYC | Sailing");
  return (
    <div className={Styles.Page}>
       <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>Sailing</div>
        <div className={Styles.Diffuser}></div>
        <img
          src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/Page%20Header%20Images/Defender-Upwind-Border-5.jpg?raw=true`}
          alt=""
          className={Styles.Header_Image}
        />
      </div>
    </div>
  )
}

export default Sailing