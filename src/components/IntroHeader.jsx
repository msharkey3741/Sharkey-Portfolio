import React from "react";
import "../css/background.css";

const TopHeader = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return (
      <div className="mobileTop">
        <h1 className="topText">Matt Sharkey's</h1>
      </div>
    );
  } else {
    return (
      <div className="topHead">
        <h1 className="topText">
          Matt Sharkey's Portfolio
          <hr />
          <span>
            <h2> Full Stack Developer</h2>
          </span>
        </h1>
      </div>
    );
  }
};
export default TopHeader;
