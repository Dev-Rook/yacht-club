import React from "react";
import { motion } from "framer-motion";
import Styles from "../../Styles/Componet-Styles/PageHeader.module.scss";



const ArticlesHeader = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Large_Text}>Club Articles</p>
      </div>

      <div className={Styles.Diffuser}></div>

      <div className={Styles.Background_Container}>
        <video
          src={``}
          className={Styles.Background_Video}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default ArticlesHeader;