import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { Link, useHistory, useLocation } from "react-router-dom";

import "../scss/Card.scss";

const Card = props => {
  const { delay, onDelayStart, onDelayEnd, replace, to, ...rest } = props;
  let timeout = null;
  let history = useHistory();
  let location = useLocation();

  const [card, setCard] = useState(false);
  const cardClass = ["cardImg Tilt-Inner"];
  const tiltCard = ["Tilt", "card"];
  const cardHidden = ["cardHidden"];

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = e => {
    setCard(!card);
    // if trying to navigate to current page stop everything
    if (location?.pathname === to) return;

    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }, delay);
  };
  if (card) {
    cardHidden.push("active");

    cardClass.push("active");
    tiltCard.push("active");
    setTimeout(() => {}, 10);
  }
  return (
    <Link {...rest} to={to} onClick={e => handleClick(e)}>
      <Tilt className={tiltCard.join(" ")} options={{ max: 25 }}>
        <img src={props.img} alt="Ботиночки" className={cardClass.join(" ")} />
      </Tilt>
      <img src={props.img} alt="Ботиночки" className={cardHidden.join(" ")} />
    </Link>
  );
};

export default Card;
