import React from "react";
import Styles from "../../Styles/Componet-Styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Link_Section}>
        Created By{" "}
        <a
        className={Styles.Link}
          href={`https:rookdeveloper.vercel.app`}
          target={"_blank"}
          rel={"noreferrer"}
        >
          Developer Rook
        </a>{" "}
        © 2023
      </div>
    </div>
  );
};

export default Footer;
