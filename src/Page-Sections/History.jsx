import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/History.module.scss";

import TimelineAlternate from "../Components/Secondary/TimelineAlternate";
import TimelineRight from "../Components/Secondary/TimelineRight";

const History = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>History</p>
        <p className={Styles.Section_Title}>Club Timeline</p>
      </div>

      <div className={Styles.Timeline_Alternate}>
        <TimelineAlternate />
      </div>

      <div className={Styles.Timeline_Right}>
        <TimelineRight />
      </div>
    </div>
  );
};

export default History;
