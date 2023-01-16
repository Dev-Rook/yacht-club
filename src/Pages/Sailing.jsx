import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Sailing.module.scss";

import PageHead from "../Components/Main/PageHead";

import J22Sailing from "../Page-Sections/J22Sailing";
import PinappleCup from "../Page-Sections/PinappleCup";

const Sailing = () => {
  TabTitle("MBYC | Sailing");
  return (
    <div className={Styles.Page}>
      <PageHead Title={"Do You Sail?"} />

      <div className={Styles.Poster_Container}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FJamaica&showTitle=0&src=ZGV2LnJvb2sxMjFAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uam0jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"
          width="100%"
          height="600"
        ></iframe>
      </div>

      <J22Sailing />
      <PinappleCup />
    </div>
  );
};

export default Sailing;
