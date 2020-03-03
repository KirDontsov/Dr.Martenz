import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";

const SlideTwoContacts = () => {
  return (
    <Fragment>
      <div className="containerSlide">
        <Fade delay={700}>
          <div className="container flexCenter">
            <h2 className="whiteText">
              Свяжитесь с нами удобным для Вас способом:
            </h2>
            <div className="textContainer">
              <h3 className="whiteText">Тел:</h3>
              <p className="whiteText">8 (800) 555-35-35</p>
              <h3 className="whiteText">Почта:</h3>
              <p className="whiteText">sales@martinz.com</p>
              <h3 className="whiteText">Адрес:</h3>
              <p className="whiteText">620087, г. Екатеринбург, Межевая, 11</p>
            </div>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default SlideTwoContacts;
