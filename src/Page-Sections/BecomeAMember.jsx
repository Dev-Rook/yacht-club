import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Section-Styles/BecomeAMember.module.scss";

const BecomeAMember = (scrollUp) => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Become A Member</h1>

        <p className={Styles.Description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis
          dignissimos sunt aut corporis dolor ab harum atque molestias
          molestiae.
        </p>

        <Link to={"Membership"}>
          <button onClick={scrollUp} className={Styles.Contact_Button}>Apply</button>
        </Link>
      </div>
    </div>
  );
};

export default BecomeAMember;
