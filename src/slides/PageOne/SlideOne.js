import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";

const SlideOne = ({ title, subtitle }) => {
  return (
    <Fragment>
      <div className="containerSlide">
        <Fade delay={700} duration={3000}>
          <div className="container flexCenter">
            <h1 className="whiteText">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default SlideOne;
