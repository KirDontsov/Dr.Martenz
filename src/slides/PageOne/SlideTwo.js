import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Card from "../../components/Card";

import BotsBlack from "../../assets/images/BotsBlack.jpg";

const SlideTwo = () => {
  return (
    <Fragment>
      <div className="containerSlide">
        <Fade delay={700}>
          <div className="container flexCenter">
            <h2 className="whiteText">Ботиночки Черные</h2>
            <Card img={BotsBlack} to="/card" delay="500" />
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default SlideTwo;
