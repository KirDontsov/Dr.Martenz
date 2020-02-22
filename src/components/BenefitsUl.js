import React from "react";
import Fade from "react-reveal/Fade";

const BenefitsUl = () => {
  return (
    <ul className="cardUl">
      <Fade left cascade delay={700} duration={3000}>
        <li>Импортировано из UK</li>
        <li>Натуральный нубук</li>
        <li>Есть в наличии</li>
        <li>Обмен и возврат без проблем!</li>
        <li>Доставка по всей России</li>
        <li>Предзаказ можно оформить за 30% стоимости</li>
      </Fade>
    </ul>
  );
};

export default BenefitsUl;
