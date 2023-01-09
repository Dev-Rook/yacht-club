import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";
import Fallback from "./Pages/Fallback";

// Page Import Start
const Landing = lazy(() => import("./Pages/Landing"));
const About = lazy(() => import("./Pages/About"));
const Visit = lazy(() => import("./Pages/Visit"));
const Updates = lazy(() => import("./Pages/Updates"));
const Sailing = lazy(() => import("./Pages/Sailing"));
const Fishing = lazy(() => import("./Pages/Fishing"));
const Membership = lazy(() => import("./Pages/Membership"));
// Page Import End

function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Navbar scroll={scrollUp} />
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={"/"} element={<Landing />} />
            <Route path={"About"} element={<About />} />
            <Route path={"Visit"} element={<Visit />} />
            <Route path={"Updates"} element={<Updates />} />
            <Route path={"Sailing"} element={<Sailing />} />
            <Route path={"Fishing"} element={<Fishing />} />
            <Route path={"Membership"} element={<Membership />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>

      <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30, color: "white" }}
        className={`${Styles.Back_To_Top_Icon} ${
          backToTop ? Styles.Show_Back_To_Top : ""
        }`}
      />
    </div>
  );
}

export default App;
