import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Fishing.module.scss";

import PageHead from "../Components/Main/PageHead"

import Reel from "../Assets/Images/Fishing-Reel.jpeg"


const Fishing = () => {
  TabTitle("MBYC | Fishing");
  return (
    <div className={Styles.Page}>
      <PageHead Image={Reel} Title={"Do You Fish?"} />
    </div>
  );
};

export default Fishing;
