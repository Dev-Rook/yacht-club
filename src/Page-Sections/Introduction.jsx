import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <div className={Styles.About_Container}>
          <p className={Styles.Question}>Who We Are</p>
          <p className={Styles.Brand}>Montego Bay Yach Club</p>
          <p className={Styles.Description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            consectetur? Voluptates placeat nesciunt rem doloribus quae eos
            libero eveniet et.
          </p>

          <Link to={"AboutPage"}>
            <button className={Styles.Read_More_Button}>Read More</button>
          </Link>
        </div>
        <div className={Styles.Image_Container}>
          <img
            src={
              "https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/ClubFlag.jpeg?raw=true"
            }
            alt=""
            className={Styles.Image}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
