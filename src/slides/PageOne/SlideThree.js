import React, { Fragment } from "react";
import Card from "../../components/Card";
import Fade from "react-reveal/Fade";

import BotsBroun from "../../assets/images/BotsBroun.jpg";

const SlideThree = () => {
  return (
    <Fragment>
      <div className="containerSlide">
        <Fade delay={700}>
          <div className="container flexCenter">
            <h2 className="whiteText">Ботиночки Черные</h2>
            <Card img={BotsBroun} to="/card2" delay="500" />
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default SlideThree;
