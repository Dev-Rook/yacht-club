import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Updates.module.scss";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const Updates = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Club Updates</h1>

        <p className={Styles.Description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis
          dignissimos sunt aut corporis dolor ab harum atque molestias
          molestiae.
        </p>

        <div className={Styles.Social_Icon_Bar}>
          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <InstagramIcon
                className={Styles.SocialIcon}
                sx={{ color: "purple", fontSize: 25 }}
              />
              <p className={Styles.Social_Title}>Instagram</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <FacebookIcon
                className={Styles.SocialIcon}
                sx={{ color: "lightBlue", fontSize: 25 }}
              />
              <p className={Styles.Social_Title}>FaceBook</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <TwitterIcon
                className={Styles.SocialIcon}
                sx={{ color: "blue", fontSize: 25 }}
              />
              <p className={Styles.Social_Title}>Twitter</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Updates;
