import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/HistoryDocs.module.scss";

import HistoryData from "../Assets/Data/HistoryPdf.json";

const HistoricalDocs = () => {
  const [data, setData] = useState(HistoryData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}></p>
        <p className={Styles.Section_Title}>Historical Documents</p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <a
                href={value.Link}
                target={"_blank"}
                rel={"noreferrer"}
                key={value.id}
              >
                <div className={Styles.Card}>
                  <img src={value.Icon} alt="" className={Styles.Icon} />
                  <p className={Styles.Title}>{value.Title}</p>
                   </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default HistoricalDocs;
