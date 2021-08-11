/* 
  This component is the Navigation Bar that is rendered in the First Section.
  This is a responsive Navigation Bar that turns into a "hamburger menu" when displayed on mobile.
  This component consumes  the "NavItems" object, which contains information about the title, url and className of the menu items.
*/

import "./NavBar.css";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  /* When the "mobile menu" is clicked on, it'll change its state to the opposite of whatever it was previously */
  const handleClickMenu = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar-header">
      <Link to="/" className="navbar-title">
        sunnyside
      </Link>
      <div onClick={handleClickMenu} className="menu-icon">
        {/* Changes the icon displayed (hamburger menu or exit) depending on the state (clicked or not) of the menu */}
        {menuClicked ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {/* Changes the className of the div depending on the state (clicked or not) of the menu */}
      <ul className={menuClicked ? "navbar-menu active" : "navbar-menu"}>
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
