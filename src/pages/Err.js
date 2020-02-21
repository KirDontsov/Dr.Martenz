import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";

const Err = () => (
  <Fragment>
    <Helmet>
      <title>404</title>
      <meta name="description" content="404" />
    </Helmet>
    <Fade delay={700}>
      <div className="container flexCenter">
        <h1 className="whiteText">Упс... 404 Страница не существует</h1>
      </div>
    </Fade>
  </Fragment>
);

export default Err;
