import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Offer.module.scss";

import Offerdata from "../Assests/Data/Offer.json";

const Offer = () => {
  const [data, setData] = useState(Offerdata);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- Services</p>
        <p className={Styles.Section_Title}>Club Services</p>
      </div>

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

export default Offer;
