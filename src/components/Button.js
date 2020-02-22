import React from "react";
import Fade from "react-reveal/Fade";

const Button = () => {
  return (
    <Fade right delay={700}>
      <button className="addToCart">Добавить в Корзину</button>
    </Fade>
  );
};

export default Button;
