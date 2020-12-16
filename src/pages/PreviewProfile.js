import React from "react";
import ProfilePlacholder from "./../media/profile/profile.svg";
import { FaUser, FaUserTie, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";
import FullHeightWrapper from "../components/FullHeightWrapper";

const PreviewProfile = () => {
  return (
    <FullHeightWrapper>
      <div className="preview-profile">
        <div className="preview-profile-header">
          <motion.div
            className="preview-profile-header-box"
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="preview-profile-header-image-container"
              initial={{
                y: "-100%",
                x: "-50%",
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={ProfilePlacholder}
                alt=""
                className="preview-profile-header-image"
              />
            </motion.div>

            <div className="preview-profile-header-content">
              <h1>Abd Alwahab</h1>
              <p>Web Developer</p>
            </div>

            <div className="preview-profile-role">
              <FaUser size={30} color="#fff" />

              <span>User</span>
            </div>
          </motion.div>
        </div>
      </div>
    </FullHeightWrapper>
  );
};

export default PreviewProfile;
