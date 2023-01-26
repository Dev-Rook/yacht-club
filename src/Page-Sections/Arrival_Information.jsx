import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Section-Styles/Arrival_Information.module.scss";

import Rates from "../Components/Secondary/Rates"

const Arrival_Information = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Image_Container}>
        <img src={``} alt="" className={Styles.Section_Image} />
      </div>

      <p className={Styles.Section_Title}>Arrival</p>
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

      {/* Berthing Section */}
      <p className={Styles.Section_Title}>Berthing</p>
      <hr />
      <p className={Styles.Section_Description}>
        Berthing facilities consist of a finger pier with a T-head. Water depth
        varies from 6 to 20 feet. Boats are berthed stern-to on either side
        using their own anchors. Dock rates are listed below. Boats may also
        anchor in the basin off the Club. There is a daily charge for use of the
        Club facilities. Berthing reservations / special requests on the dock -
        <Link className={Styles.Link} to={"Contact"}>
          {" "}
          please contact us
        </Link>
        .
      </p>

      <Rates />
    </div>
  );
};

export default Arrival_Information;
