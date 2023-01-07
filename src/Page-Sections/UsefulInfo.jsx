import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/UsefulInfo.module.scss";

import UsefulInfoData from "../Assets/Data/UsefulInfo.json";

const UsefulInfo = () => {
  const [data, setData] = useState(UsefulInfoData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}></p>
        <p className={Styles.Section_Title}>Useful Information</p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <div className={Styles.Card} key={value.id}>
                <img src={value.Icon} alt="" className={Styles.Icon} />
                <p className={Styles.Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UsefulInfo;
