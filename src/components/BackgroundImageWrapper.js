import React from "react";

function BackgroundImageWrapper({ imageSrc, userName, componentTitle }) {
  return (
    <div className="background-image-wrapper">
      <div className="background-image-wrapper-image-container">
        <img className="background-image-wrapper-image" src={imageSrc} alt="background" />
      </div>
      <div className="background-image-wrappert--content">
        <h2 className="background-image-wrapper--title">Welcome {userName}</h2>

        <p className="background-image-wrapper--desc">{componentTitle}</p>
      </div>
    </div>
  );
}

export default BackgroundImageWrapper;
