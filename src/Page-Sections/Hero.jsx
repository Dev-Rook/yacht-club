import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Small_Text}></p>
        <p className={Styles.Large_Text}>Montego Bay Yacht Club</p>

        <button className={Styles.Project_Button}>
          <Link to={"AboutPage"}>About Us</Link>
        </button>
      </div>

      <div className={Styles.Diffuser}></div>

      <div className={Styles.Background_Container}>
        <video src={``} className={Styles.Background_Video}></video>
      </div>
    </div>
  );
};

export default Hero;