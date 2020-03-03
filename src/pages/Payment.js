import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import ScrollingHorizontally from "../components/PageOne/HorizontalScroll";
import "../scss/Payment.scss";

const Delivery = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Оплата</title>
        <meta name="description" content="Оплата Dr.Martens" />
      </Helmet>
      <ScrollingHorizontally
        title="Оплата"
        subtitle="В нашем интернет магазине"
      />
    </Fragment>
  );
};

export default Delivery;
