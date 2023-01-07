import React from "react";
import Styles from "../Styles/Page-Section-Styles/Arrival.module.scss";

const Arrival = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Arrival</h1>

        <p className={Styles.Description}>
          Call the Montego Bay Yacht Club on VHF Channel 16 for contact on
          arrival. After berthing register at office (normal office hours only).
          The Office will call Customs and Immigration to have you cleared at
          the Club. Note: The following persons do not need a visa: - persons
          with EU, Commonwealth, USA & Canadian passports. Everyone else should
          check{" "}
          <a
            className={Styles.Link}
            target={"_blank"}
            rel={"noreferrer"}
            href={`http://www.jaconsulatecayman.org/upimages/ckeditor/2_ja.pdf`}
          >
            here
          </a>{" "}
          . Do not leave your boat or the MBYC until you have been cleared by
          all government agencies. All vessels should be equipped with holding
          tanks.
        </p>
      </div>
    </div>
  );
};

export default Arrival;
