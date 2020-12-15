import React from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";

function ToggleNav({ resNav, setResNav }) {
  return (
    <div className="toggle-nav">
      {resNav ? (
        <div>
          <FaTimesCircle
            className="open-nav"
            size={45}
            color="tomato"
            onClick={() => setResNav(false)}
          />
        </div>
      ) : (
        <FaBars
          className="open-nav"
          size={45}
          color="tomato"
          onClick={() => setResNav(true)}
        />
      )}
    </div>
  );
}

export default ToggleNav;
