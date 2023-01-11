import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Fishing.module.scss";

import FishingHeader from "../Components/Headers/FishingHeader"

const Fishing = () => {
  TabTitle("MBYC | Fishing");
  return (
    <div className={Styles.Page}>
      <FishingHeader />
    </div>
  );
};

export default Fishing;
