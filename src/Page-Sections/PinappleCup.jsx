import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/SailingSections.module.scss";

import J22Data from "../Data/PineappleCup.json";

const PinappleCup = () => {
  const [data, setData] = useState(J22Data);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Image_Container}>
        <img src={``} alt="" className={Styles.Section_Image} />
      </div>

      <p className={Styles.Section_Title}>Pinepple Cup</p>
      <p className={Styles.Section_Description}>
        One of the oldest offshore races on the calendar, The Pineapple Cup –
        Montego Bay Race started in 1961, making 2017 the 33rd edition of the
        venerable 811 nautical mile race. Immediately after the start, racers
        cross the Gulf Stream for the Northwest Providence Channel. The middle
        of the race offers a fetch down the eastern side of the Bahamas Island
        Chain toward the tip of Cuba. The final stretch is typically a sailor’s
        dream: a 240-mile downwind sleigh ride from Cuba’s eastern tip, known as
        the Windward Passage, to the finish at Montego Bay.
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

export default PinappleCup;
