import React from "react";
import { animateScroll as scroll } from "react-scroll";

const top = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="topButton" onClick={scrollToTop}>
      <a href>top</a>
    </div>
  );
};
export default top;
