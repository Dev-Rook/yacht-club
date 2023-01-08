import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Section-Styles/PlanToVist.module.scss";

const PlanToVisit = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Plan To Visit?</h1>

        <p className={Styles.Description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis
          dignissimos sunt aut corporis dolor ab harum atque molestias
          molestiae.
        </p>

        <Link to={"Visit"}>
          <button className={Styles.Contact_Button}>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default PlanToVisit;
