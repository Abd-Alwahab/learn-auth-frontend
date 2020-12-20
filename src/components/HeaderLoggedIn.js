import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import ProfilePlacholder from "./../media/profile/profile.svg";

const HeaderLoggedIn = ({ closeNav }) => {
  return (
    <div className="header-loggedin">
      <div className="header-user user-name">
        <img src={ProfilePlacholder} alt="user" className="header-user-photo" />
        <h3 className="header-user-name">Abd Alwahab</h3>

        <ul className="sub-list">
          <li className="sub-item">
            <Link to="/view-profile" className="sub-link link">
              Preview Profile
            </Link>
          </li>

          <li className="sub-item">
            <Link to="/orders/me" className="sub-link link">
              My Orders
            </Link>
          </li>
          <li className="sub-item">
            <Link to="/edit-profile" className="sub-link link">
              Update Info
            </Link>
          </li>
          <li className="sub-item">
            <Link to="/update-password" className="sub-link link">
              Update Password
            </Link>
          </li>
        </ul>
      </div>

      <Link className="icon cart-icon" to="/cart" onClick={closeNav}>
        <span className="cart-count">
          <span>0</span>
        </span>
        <FaShoppingCart
          size={30}
          style={{
            cursor: "pointer",
            alignSelf: "center",
            padding: ".5rem",
            // margin: ".4rem",
          }}
          color="tomato"
        />
      </Link>
      <FaSignOutAlt
        size={30}
        style={{
          cursor: "pointer",
        }}
      ></FaSignOutAlt>
    </div>
  );
};

export default HeaderLoggedIn;
