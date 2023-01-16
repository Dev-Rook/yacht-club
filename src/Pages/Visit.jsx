import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Visit.module.scss";

import PageHead from "../Components/Main/PageHead";

import UsefulInfo from "../Page-Sections/UsefulInfo";
import Arrival from "../Page-Sections/Arrival";
import Berthing from "../Page-Sections/Berthing";
import Rates from "../Components/Secondary/Rates";

const Visit = () => {
  TabTitle("MBYC | Visit");

  return (
    <div className={Styles.Page}>
      <PageHead Title={"The Club Awaits!"} />

      <Arrival />
      <Berthing />
      <Rates />
      <UsefulInfo />
    </div>
  );
};

export default Visit;
