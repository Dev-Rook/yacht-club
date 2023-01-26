import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Visit.module.scss";

import PageHead from "../Components/Main/PageHead";

import UsefulInfo from "../Page-Sections/UsefulInfo";
import Arrival_Information from "../Page-Sections/Arrival_Information";
import Rates from "../Components/Secondary/Rates";

const Visit = () => {
  TabTitle("MBYC | Visit");

  return (
    <div className={Styles.Page}>
      <PageHead Title={"The Club Awaits!"} />

      <Arrival_Information />
      {/* <Berthing /> */}
      {/* <Rates /> */}
      <UsefulInfo />
    </div>
  );
};

export default Visit;
