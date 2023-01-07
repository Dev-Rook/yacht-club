import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Updates.module.scss";

import UpdatesData from "../Assets/Data/Updates.json";

const Updates = () => {
  TabTitle("MBYC | Updates");
  const [data, setData] = useState(UpdatesData);
  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>Updates</div>
        <div className={Styles.Diffuser}></div>
        <img
          src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/Floaters.jpeg?raw=true`}
          alt=""
          className={Styles.Header_Image}
        />
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
