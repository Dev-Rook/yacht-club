import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Section-Styles/Berthing.module.scss";

const Berthing = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Berthing</h1>

        <p className={Styles.Description}>
          Berthing facilities consist of a finger pier with a T-head. Water
          depth varies from 6 to 20 feet. Boats are berthed stern-to on either
          side using their own anchors. Dock rates are listed below. Boats may
          also anchor in the basin off the Club. There is a daily charge for use
          of the Club facilities. Berthing reservations / special requests on
          the dock - please contact us.
        </p>
      </div>
    </div>
  );
};

export default Berthing;
