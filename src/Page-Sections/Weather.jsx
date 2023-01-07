import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Section-Styles/Weather.module.scss";

const Weather = () => {
    
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Weather</h1>

        <p className={Styles.Description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis
          dignissimos sunt aut corporis dolor ab harum atque molestias
          molestiae.
        </p>
      </div>
      {/* <iframe
        className={Styles.Weather_Iframe}
        src={`https://widgets.sailflow.com/widgets/web/windMap?w=600&h=450&c=0A2946&rp=18&m_m=t&csn=MBJ&search=44.38959,-68.20694&sn=RainWise&sid=100661&u_t=F&act=Sail&m_c=18.47,-77.93&m_z=12&app=sailflow`}
        width={"100%"}
        height={"100%"}
        frameborder="none"
      ></iframe> */}
    </div>
  );
};

export default Weather;
