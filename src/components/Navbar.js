import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedOut from "./HeaderLoggedOut";
import ToggleNav from "./ToggleNav";

function Navbar() {
  const [resNav, setResNav] = useState(false);

  const closeNav = () => {
    setResNav(false);
  };

  return (
    <>
      <div className="nav-container">
        <ToggleNav resNav={resNav} setResNav={setResNav} className="open-nav" />
        <div
          className="header__nav"
          style={{
            left: resNav ? "0" : "-100%",
          }}
        >
          <nav className="nav">
            <motion.div
              className="logo__container"
              transition={{ duration: 0.6 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <Link to="/learn-auth-frontend">
                {" "}
                <h1 className="logo__text">BK</h1>
              </Link>
            </motion.div>

            <motion.ul
              className="nav__list"
              transition={{ duration: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <li className="list__item" onClick={closeNav}>
                <Link to="/learn-auth-frontend" className=" link list__link">
                  Home
                </Link>
              </li>
              <li className="list__item" onClick={closeNav}>
                <Link to="/profile" className=" link list__link">
                  Account
                </Link>
              </li>

              <li className="list__item" onClick={closeNav}>
                <Link to="/developer" className=" link list__link">
                  Developer
                </Link>
              </li>

              <li className="list__item  books-item" onClick={closeNav}>
                <Link to="/edit-account" className=" link list__link">
                  Update-Account
                </Link>
              </li>

              <li className="list__item" onClick={closeNav}>
                <Link to="/resetpassword" className="link list__link">
                  Contact
                </Link>
              </li>
            </motion.ul>

            <HeaderLoggedOut closeNav={closeNav} />
          </nav>
        </div>
      </div>
      <div className="nav-bottom-margin"></div>
    </>
  );
}

export default Navbar;
