import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeaderLoggedOut({ closeNav }) {
  return (
    <motion.div
      className="header-logged-out"
      transition={{ duration: 0.5 }}
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Link className="btn-small link btn-login" to="/login" onClick={closeNav}>
        Login
      </Link>
      <Link className="btn-small link btn-signup" to="/signup" onClick={closeNav}>
        Signup
      </Link>
    </motion.div>
  );
}

export default HeaderLoggedOut;
