import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Landing.module.scss";

// Page Section Import Start
import Hero from "../Page-Sections/Hero";
import Introduction from "../Page-Sections/Introduction";
import Offer from "../Page-Sections/Offer"
import Tour from "../Page-Sections/Tour"
import BecomeAMember from "../Page-Sections/BecomeAMember";
import Updates from "../Page-Sections/Updates";
import Staff from "../Page-Sections/Staff";
// Page Section Import End

const Landing = () => {
  TabTitle("MBYC | Home");
  return (
    <div className={Styles.Page}>
      {/* <Hero /> */}
      <Introduction />
      <Offer />
      <Tour />
      <BecomeAMember />
      <Updates />
      <Staff />
    </div>
  );
};

export default Landing;
