import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import ScrollingHorizontally from "../components/PageOne/HorizontalScroll";
import "../scss/Contacts.scss";

const Delivery = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Контакты</title>
        <meta name="description" content="Контакты Dr.Martens" />
      </Helmet>
      <ScrollingHorizontally
        title="Контакты"
        subtitle="Ответим на все Ваши вопросы"
      />
    </Fragment>
  );
};

export default Delivery;
