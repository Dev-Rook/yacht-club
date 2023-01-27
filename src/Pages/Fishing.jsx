import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Fishing.module.scss";
import styles from "../Styles/Page-Section-Styles/Arrival_Information.module.scss"

import PageHead from "../Components/Main/PageHead";
import Reel from "../Assets/Images/Fishing-Reel.jpeg";

import FishingData from "../Data/Fishing.json";

const Fishing = () => {
  TabTitle("MBYC | Fishing");
  const [data, setData] = useState(FishingData);
  return (
    <div className={Styles.Page}>
      <PageHead Image={Reel} Title={"Do You Fish?"} />

      <div className={styles.Section}>
        <div className={styles.Section_Image_Container}>
          <img src={``} alt="" className={styles.Section_Image} />
        </div>

        <p className={styles.Section_Title}>Fishing</p>
        <hr />
        <p className={styles.Section_Description}>
          Call the Montego Bay Yacht Club on VHF Channel 16 for contact on
          arrival. After berthing register at office (normal office hours only).
          The Office will call Customs and Immigration to have you cleared at
          the Club. Note: The following persons do not need a visa: - persons
          with EU, Commonwealth, USA & Canadian passports. Everyone else should
          check{" "}
          <a
            className={styles.Link}
            target={"_blank"}
            rel={"noreferrer"}
            href={`http://www.jaconsulatecayman.org/upimages/ckeditor/2_ja.pdf`}
          >
            here
          </a>{" "}
          . Do not leave your boat or the MBYC until you have been cleared by
          all government agencies. All vessels should be equipped with holding
          tanks
        </p>

        <div className={styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <div className={styles.Card} key={value.id}>
                <img src={value.Icon} alt="" className={Styles.Icon} />
                {/* <p className={Styles.Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p> */}
              </div>
            );
          })}
      </div>
      </div>
    </div>
  );
};

export default Fishing;
