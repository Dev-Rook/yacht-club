import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Styles from "../../Styles/Componet-Styles/Navbar.module.scss";

import ListGroup from "react-bootstrap/ListGroup";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Hamburger from "hamburger-react";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SailingIcon from "@mui/icons-material/Sailing";
import Groups2Icon from "@mui/icons-material/Groups2";
import CallIcon from "@mui/icons-material/Call";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
          src={`https://github.com/Dev-Rook/minimal-portfolio/blob/main/src/Assets/Images/Carbon%20Claws.png?raw=true`}
          alt=""
          className={Styles.Logo}
        />
      </div>
      <span className={Styles.Span}>
        <Hamburger
          className={Styles.HamburgerMenu}
          onToggle={setMenu}
          direction="right"
          // color="#ffffff"
          duration={0.5}
          size={35}
        />
      </span>

      {/* <MenuIcon
        onClick={showMenu}
        className={Styles.MenuIcon}
        sx={{ color: "black", fontSize: 40 }}
      /> */}

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <div className={Styles.Mobile_Menu_Header}>
          <CloseIcon
            onClick={showMenu}
            className={Styles.CloseIcon}
            sx={{ color: "white", fontSize: 40 }}
          />
          <div className={Styles.Diffuser}></div>
          <img
            src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assests/Images/Man-Cigar.jpeg?raw=true`}
            alt=""
            className={Styles.Header_Image}
          />
        </div>

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
            to={"Curriculums"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assests/Icons/Anchor.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Visit
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Curriculums"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <Groups2Icon sx={{ color: "White", fontSize: 25 }} />
              Club
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Documents"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <SailingIcon sx={{ color: "White", fontSize: 25 }} />
              Sailing
            </ListGroup.Item>
          </Link>

          <Link onClick={doubleFunction} className={Styles.Navlink} to={"News"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assests/Icons/Fishing.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Fishing
            </ListGroup.Item>
          </Link>

          <Link onClick={doubleFunction} className={Styles.Navlink} to={"News"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assests/Icons/Membership.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Membership
            </ListGroup.Item>
          </Link>

          <Link onClick={doubleFunction} className={Styles.Navlink} to={"News"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assests/Icons/Updates.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Updates
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Contact"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
            <img
                src={`https://github.com/Dev-Rook/yacht-club/blob/master/src/Assests/Icons/Call.png?raw=true`}
                alt=""
                className={Styles.Navlink_Icon}
              />
              Contact
            </ListGroup.Item>
          </Link>
        </ListGroup>

        <div className={Styles.Social_Icon_Bar}>
          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <InstagramIcon
                className={Styles.SocialIcon}
                sx={{ color: "White", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>Instagram</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <FacebookIcon
                className={Styles.SocialIcon}
                sx={{ color: "White", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>FaceBook</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <TwitterIcon
                className={Styles.SocialIcon}
                sx={{ color: "White", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>Twitter</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <WhatsAppIcon
                className={Styles.SocialIcon}
                sx={{ color: "White", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>WhatsApp</p>
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
