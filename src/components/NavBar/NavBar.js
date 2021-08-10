import "./NavBar.css";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClickMenu = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar-header">
      <Link to="/" className="navbar-title">
        sunnyside
      </Link>
      <div onClick={handleClickMenu} className="menu-icon">
        {menuClicked ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
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
