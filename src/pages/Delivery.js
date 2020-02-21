import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import ScrollingHorizontally from "../components/PageOne/HorizontalScroll";

const Delivery = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Доставка</title>
        <meta name="description" content="Доставка Dr.Martens" />
      </Helmet>
      <ScrollingHorizontally title="Доставка" subtitle={null} />
    </Fragment>
  );
};

export default Delivery;
