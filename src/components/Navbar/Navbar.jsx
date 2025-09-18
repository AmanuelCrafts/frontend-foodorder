import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const [open, setOpen] = useState(false);

  const handleClick = (menuName) => {
    setMenu(menuName);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar-menu ${open ? "open" : ""}`}>
        <li
          onClick={() => handleClick("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          <Link className="link" to="/">
            Menu
          </Link>
        </li>
        <li
          onClick={() => handleClick("about")}
          className={menu === "about" ? "active" : ""}
        >
          <Link className="link" to="/about">
            About Us
          </Link>
        </li>

        <li className="mobile-only">
          <Link className="link" to="/cart" onClick={() => setOpen(false)}>
            Cart
          </Link>
        </li>
        <li className="mobile-only">
          <Link className="link" to="/signin" onClick={() => setOpen(false)}>
            Sign In
          </Link>
        </li>
      </ul>

      <div className="navbar-right desktop-only">
        <img src={assets.basket_icon} alt="Cart" />
        <div className="dot"></div>
        <button>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
