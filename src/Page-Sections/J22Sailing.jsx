import React, {useState} from "react";
import Styles from "../Styles/Page-Section-Styles/SailingSections.module.scss";

import J22Data from "../Data/J22.json";

const J22Sailing = () => {
  const [data, setData] = useState(J22Data);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Image_Container}>
        <img src={``} alt="" className={Styles.Section_Image} />
      </div>

      <p className={Styles.Section_Title}>J22 Sailing</p>
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

export default J22Sailing;
