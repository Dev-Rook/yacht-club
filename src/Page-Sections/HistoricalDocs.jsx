import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/HistoryDocs.module.scss";

import HistoryData from "../Data/HistoryPdf.json";

const HistoricalDocs = () => {
  const [data, setData] = useState(HistoryData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Image_Container}>
        <img src={``} alt="" className={Styles.Section_Image} />
      </div>

      <p className={Styles.Section_Title}>Historical Documents</p>
      <p className={Styles.Section_Description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis labore
        tempore temporibus, animi repellendus voluptas ut eos beatae voluptates.
      </p>

      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <div className={Styles.Card} key={value.id}>
                <img src={value.Icon} alt="" className={Styles.Icon} />
                {/* <p className={Styles.Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HistoricalDocs;
