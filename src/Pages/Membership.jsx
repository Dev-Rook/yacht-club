import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Membership.module.scss";

import MembershipHeader from "../Components/Headers/MembershipHeader"
import Table from "react-bootstrap/Table";
import Benifits from "../Page-Sections/Benifits";
import MembershipForm from "../Page-Sections/MembershipForm";

const Membership = () => {
  TabTitle("MBYC | Membership");
  return (
    <div className={Styles.Page}>
      <MembershipHeader />


      <div className={Styles.Section}>
        <div className={Styles.Section_Title_Container}>
          <p className={Styles.Question}></p>
          <p className={Styles.Section_Title}>Membership Fees</p>
        </div>

        <Table className={Styles.Table} bordered variant="dark">
          <thead>
            <tr>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Junior</td>
              <td>US $50</td>
            </tr>
            <tr>
              <td>Single Adult</td>
              <td>US $260</td>
            </tr>
            <tr>
              <td>Family</td>
              <td>US$ $360</td>
            </tr>
            <tr>
              <td>Corporate (5 adults)</td>
              <td>US $750</td>
            </tr>
            <tr>
              <td>Corporate (10 adults)</td>
              <td>US $900</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Benifits />
      <MembershipForm />
    </div>
  );
};

export default Membership;
