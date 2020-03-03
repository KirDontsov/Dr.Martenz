import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import MyMap from "../../components/Map";
import { YMaps } from "react-yandex-maps";

const SlideTwoContacts = () => {
  return (
    <Fragment>
      <div className="containerSlide">
        <Fade delay={700}>
          <div className="container flexCenter">
            <h2 className="whiteText last">Мы находимся:</h2>
            <YMaps>
              <MyMap />
            </YMaps>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default SlideTwoContacts;
