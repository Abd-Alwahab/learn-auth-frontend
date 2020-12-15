import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FullHeightWrapper from "../components/FullHeightWrapper";

const HomeLoggedOut = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <FullHeightWrapper>
        <div className="home-header">
          <div className="home-header-content">
            <motion.h1
              transition={{ duration: 0.5 }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              className="home-title"
            >
              Booktion
            </motion.h1>
            <motion.p
              className="home-description"
              transition={{ duration: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              A world of science and knowledge , Read and Learn from the best authors in
              the world, we have more than 22000 books for more than 1000 topics.
            </motion.p>

            <motion.div
              className="home-buttons"
              transition={{ duration: 0.5 }}
              initial={{ y: "500%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <motion.div
                className="btn-explore btn btn-home"
                transition={{ duration: 0.3 }}
                // initial={{ y: "500%", opacity: 0 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link to="/books" className="link btn" style={{ color: "tomato" }}>
                  Explore Books
                </Link>
              </motion.div>

              <motion.div
                className="btn btn-getstarted btn-home"
                transition={{ duration: 0.3 }}
                // initial={{ y: "500%", opacity: 0 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link to="/signup" className="link" style={{ color: "white" }}>
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </FullHeightWrapper>
    </motion.div>
  );
};

export default HomeLoggedOut;
