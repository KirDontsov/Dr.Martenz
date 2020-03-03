import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";

const SlideTwoDelivery = () => {
  return (
    <Fragment>
      <div className="containerSlide">
        <Fade delay={700}>
          <div className="container flexCenter">
            <div className="textContainer">
              <h2 className="whiteText">Доставка по Екатеринбургу</h2>
              <p className="whiteText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a
                laborum illum provident assumenda pariatur, libero cum dolorem
                quasi dolores corrupti repudiandae, similique culpa hic tempora
                veritatis ad incidunt non.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default SlideTwoDelivery;
