import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Landing.module.scss";

// Page Section Import Start
import Hero from "../Page-Sections/Hero";
import Introduction from "../Page-Sections/Introduction";
import PlanToVisit from "../Page-Sections/PlanToVisit";
import Offer from "../Page-Sections/Offer";
import Tour from "../Page-Sections/Tour";
import BecomeAMember from "../Page-Sections/BecomeAMember";
import Updates from "../Page-Sections/Updates";
import Weather from "../Page-Sections/Weather";
import Staff from "../Page-Sections/Staff";
// Page Section Import End

const Landing = () => {
  TabTitle("MBYC | Home");
  return (
    <div className={Styles.Page}>
      {/* <Hero /> */}
      <Introduction />
      <Offer />
      <PlanToVisit />
      <Tour />
      <BecomeAMember />
      <Updates />
      <Weather />
      <Staff />
    </div>
  );
};

export default Landing;
