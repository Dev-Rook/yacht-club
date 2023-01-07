import React from "react";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Page-Section-Styles/Weather.module.scss";

// const dotenv = require("dotenv").config();

const Weather = () => {
  // const API_KEY = process.env.REACT_APP_MB_WEATHER_API_KEY;
  // console.log(API_KEY);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=montego%20bay&appid=88187a4680485cc3729b4f335314aec2`;
  const { data, loading, error } = useAxios(url);

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

      <div className={Styles.Weather_Container}>
        <p className={Styles.Temperature}>60°c</p>

        <div className={Styles.Wind_Info_Container}>
          <div className={Styles.Wind_Item}>
            <img src={``} alt="" className={Styles.Weather_Icon} />
            <p className={Styles.Wind_Info}>{data?.wind?.speed} Knots</p>
          </div>

          <div className={Styles.Wind_Item}>
            <img src={``} alt="" className={Styles.Weather_Icon} />
            <p className={Styles.Wind_Info}>{data?.wind?.deg} Degrees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
