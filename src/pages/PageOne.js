import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import ScrollingHorizontally from "../components/PageOne/HorizontalScroll";

const PageOne = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Dr.Martens</title>
        <meta name="description" content="Dr.Martens" />
      </Helmet>
      <ScrollingHorizontally
        title="Dr.Martens"
        subtitle="Ликвидация склада в Екатеринбурге"
      />
    </Fragment>
  );
};

export default PageOne;
