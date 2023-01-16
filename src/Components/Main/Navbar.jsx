import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Styles from "../../Styles/Componet-Styles/Navbar.module.scss";

import ClubFlag from "../../Assets/Images/Club-Flag.jpeg"

import ListGroup from "react-bootstrap/ListGroup";

import Hamburger from "hamburger-react";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SailingIcon from "@mui/icons-material/Sailing";

const NavVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  },
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
    console.log("Working menu");
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const doubleFunction = () => {
    showMenu();
    scrollUp();
    handleClick();
  };

  return (
    <nav className={Styles.Navbar}>
      <div className={Styles.Image_Container} onClick={showMenu}>
        <img
          src={ClubFlag}
          alt=""
          className={Styles.Logo}
        />
      </div>

      <div className={Styles.Navlink_Container}>
        <Link onClick={scrollUp} to={"/"} className={Styles.Navlink}>
          Home
        </Link>

        <Link onClick={scrollUp} to={"About"} className={Styles.Navlink}>
          About
        </Link>

        <Link onClick={scrollUp} to={"Visit"} className={Styles.Navlink}>
          Visit
        </Link>

        <Link onClick={scrollUp} to={"Sailing"} className={Styles.Navlink}>
          Sailing
        </Link>

        <Link onClick={scrollUp} to={"Fishing"} className={Styles.Navlink}>
          Fishing
        </Link>

        <Link onClick={scrollUp} to={"Membership"} className={Styles.Navlink}>
          Membership
        </Link>

        <Link onClick={scrollUp} to={"Articles"} className={Styles.Navlink}>
          Atricles
        </Link>

        <Link onClick={scrollUp} to={"Contact"} className={Styles.Navlink}>
          Contact
        </Link>
      </div>

      <span className={Styles.Span}>
        <Hamburger
          className={Styles.HamburgerMenu}
          onToggle={setMenu}
          direction="right"
          color="#ffffff"
          duration={0.5}
          size={35}
        />
      </span>

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <ListGroup className={Styles.ListGroup}>
          <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              <HomeIcon sx={{ color: "White", fontSize: 25 }} />
              Home
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"About"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <InfoIcon sx={{ color: "White", fontSize: 25 }} />
              About
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Visit"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Icons/Anchor.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Visit
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Sailing"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <SailingIcon sx={{ color: "White", fontSize: 25 }} />
              Sailing
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Fishing"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Icons/Fishing.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Fishing
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Membership"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Icons/Membership.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Membership
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Articles"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Icons/Updates.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Articles
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Contact"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Icons/Call.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Contact
            </ListGroup.Item>
          </Link>
        </ListGroup>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
