import React from "react";
import Styles from "../Styles/Page-Section-Styles/Hero.module.scss";

// import HeroVideo from "../Assets/Videos/wow_thats_a_lotta_words_too_bad_im_not_readin_em720P_HD-1.mp4"

const Hero = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Large_Text}>Montego Bay Yacht Club</p>
      </div>

      <div className={Styles.Diffuser}></div>

      <div className={Styles.Background_Container}>
        <video src={``} className={Styles.Background_Video} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Hero;
