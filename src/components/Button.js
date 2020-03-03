import React from "react";
import Fade from "react-reveal/Fade";

const Button = () => {
  return (
    <Fade right delay={700}>
      <div className="addToCart" onClick={() => console.log("добавлено")}>
        Оставить заявку
      </div>
    </Fade>
  );
};

export default Button;
