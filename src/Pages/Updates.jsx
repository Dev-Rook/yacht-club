import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Updates.module.scss";

import UpdatesData from "../Assets/Data/Updates.json";

const Updates = () => {
  TabTitle("MBYC | Updates");
  const [data, setData] = useState(UpdatesData);
  return (
    <div className={Styles.Page}>
      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}></p>
            <p className={Styles.Brand}>Visitor Information</p>
            <p className={Styles.Description}>
              The Montego Bay Yacht Club is located on the Freeport Peninsula
              with berthing in the protected basin that forms the Montego Bay
              Harbour. General office opening hours are from: 9:00 am to 6:00
              pm.
            </p>
          </div>
          <div className={Styles.Image_Container}>
            <img
              src={
                "https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/SuperTramp.jpeg?raw=true"
              }
              alt=""
              className={Styles.Image}
            />
          </div>
        </div>
      </div>

      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          {data &&
            data.map((value) => {
              return (
                <div className={Styles.Blog_Card} key={value.id}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Category}>{value.Category}</p>
                    <img src={value.Image} alt="" className={Styles.Image} />
                  </div>
                  <div className={Styles.Information_Box}>
                    <p className={Styles.Tite}>{value.Title}</p>
                    <p className={Styles.Date}>{value.Date}</p>
                    <p className={Styles.Description}>{value.Description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Updates;
