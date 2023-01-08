import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Sailing.module.scss";

import Table from "react-bootstrap/Table";
import MembershipForm from "../Page-Sections/MembershipForm";

const Membership = () => {
  TabTitle("MBYC | Membership");
  return (
    <div className={Styles.Page}>
      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}></p>
            <p className={Styles.Brand}>Membership</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              consectetur? Voluptates placeat nesciunt rem doloribus quae eos
              libero eveniet et.
            </p>
          </div>
          <div className={Styles.Image_Container}>
            <img
              src={
                "https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/Page%20Header%20Images/Defender-Upwind-Border-5.jpg?raw=true"
              }
              alt=""
              className={Styles.Image}
            />
          </div>
        </div>
      </div>

      <div className={Styles.Section}>
        <div className={Styles.Section_Title_Container}>
          <p className={Styles.Question}></p>
          <p className={Styles.Section_Title}>Membership Fees</p>
        </div>

        <Table bordered>
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

      <MembershipForm />
    </div>
  );
};

export default Membership;
