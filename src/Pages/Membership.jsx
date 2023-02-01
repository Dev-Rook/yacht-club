import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Membership.module.scss";
import styles from "../Styles/Componet-Styles/Rates.module.scss";

import Table from "react-bootstrap/Table";

import PageHead from "../Components/Main/PageHead";
import MembershipInfo from "../Page-Sections/MembershipInfo";
import Benifits from "../Page-Sections/Benifits";
import MembershipForm from "../Page-Sections/MembershipForm";

import ClubFlag from "../Assets/Images/Club-Flag.jpeg";

const Membership = () => {
  TabTitle("MBYC | Membership");
  return (
    <div className={Styles.Page}>
      <PageHead Image={ClubFlag} Title={"Join Our Club?"} />

      <MembershipInfo />
      {/* <Benifits /> */}
      <MembershipForm />
    </div>
  );
};

export default Membership;
