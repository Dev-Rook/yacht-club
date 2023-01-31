import React from 'react'
import Styles from "../Styles/Page-Section-Styles/Membershipinfo.module.scss"
import styles from "../Styles/Componet-Styles/Rates.module.scss";

import Table from "react-bootstrap/Table";

const MembershipInfo = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Image_Container}>
        <img src={``} alt="" className={Styles.Section_Image} />
      </div>

      <p className={Styles.Section_Title}>Becoming A Member</p>
      <hr />
      <p className={Styles.Section_Description}>
        Call the Montego Bay Yacht Club on VHF Channel 16 for contact on
        arrival. After berthing register at office (normal office hours only).
        The Office will call Customs and Immigration to have you cleared at the
        Club. Note: The following persons do not need a visa: - persons with EU,
        Commonwealth, USA & Canadian passports. Everyone else should check{" "}
        <a
          className={Styles.Link}
          target={"_blank"}
          rel={"noreferrer"}
          href={`http://www.jaconsulatecayman.org/upimages/ckeditor/2_ja.pdf`}
        >
          here
        </a>{" "}
        . Do not leave your boat or the MBYC until you have been cleared by all
        government agencies. All vessels should be equipped with holding tanks
      </p>

      <div className={styles.Section}>
        <div className={styles.Section_Title_Container}>
          <p className={styles.Question}></p>
          <p className={styles.Section_Title}>Membership Fees</p>
        </div>

        <Table className={styles.Table} bordered variant="dark">
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
    </div>
  )
}

export default MembershipInfo