import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useScrollUp } from "../Hooks/useScrollUp";
import Styles from "../../Styles/Componet-Styles/Navbar.module.scss";

import ClubFlag from "../../Assets/Images/ClubFlag.jpeg";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import Hamburger from "hamburger-react";
import ListGroup from "react-bootstrap/ListGroup";

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
      <div className={Styles.Left_Side}>
        <img src={ClubFlag} alt="" className={Styles.Logo} />

        <div className={Styles.Navlink_Container}>
          <Link to={"/"} onClick={scrollUp} className={Styles.Navlink}>
            Home
          </Link>
          <Link to={"About"} onClick={scrollUp} className={Styles.Navlink}>
            About
          </Link>
          <Link to={"Visit"} onClick={scrollUp} className={Styles.Navlink}>
            Visit
          </Link>
          <Link to={"Sailing"} onClick={scrollUp} className={Styles.Navlink}>
            Sailing
          </Link>
          <Link to={"Fishing"} onClick={scrollUp} className={Styles.Navlink}>
            Fishing
          </Link>
          <Link to={"Apply"} onClick={scrollUp} className={Styles.Navlink}>
            Contact
          </Link>
        </div>
      </div>

      <div className={Styles.Right_Side}>
        <div className={Styles.Social_Icon_Tray}>
          <TwitterIcon sx={{ color: "white" }} />
          <YouTubeIcon sx={{ color: "white" }} />
          <InstagramIcon sx={{ color: "white" }} />
        </div>
        |
        <BrightnessMediumIcon sx={{ color: "white" }} />
        <span className={Styles.Span}>
          <Hamburger
            className={Styles.HamburgerMenu}
            onToggle={setMenu}
            direction="right"
            color="white"
            duration={0.5}
            size={35}
          />
        </span>
      </div>

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <ListGroup className={Styles.ListGroup}>
          <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Home
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"About"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <InfoIcon sx={{ color: "White", fontSize: 25 }} /> */}
              About
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Visit"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <AssignmentIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Visit
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Sailing"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <FolderIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Sailing
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Fishing"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <ArticleIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Fishing
            </ListGroup.Item>
          </Link>
          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Membership"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <CallIcon sx={{ color: "white", fontSize: 25 }} /> */}
              Membership
            </ListGroup.Item>
          </Link>
          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Articles"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <CallIcon sx={{ color: "white", fontSize: 25 }} /> */}
              Articles
            </ListGroup.Item>
          </Link>
          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Contact"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <CallIcon sx={{ color: "white", fontSize: 25 }} /> */}
              Contact
            </ListGroup.Item>
          </Link>
        </ListGroup>

        <div className={Styles.Contact_Information_Box}>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Yacht Club</p>
            <p className={Styles.Text}>221 B Baker Street</p>
          </div>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Contact</p>
            <p className={Styles.Text}>1 876 192 1680</p>
            <p className={Styles.Text}>mbyc@gmail.com</p>
          </div>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Social Media</p>
            <p className={Styles.Text}>Twitter</p>
            <p className={Styles.Text}>Facebook</p>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
