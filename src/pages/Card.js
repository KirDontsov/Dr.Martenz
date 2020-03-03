import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";

import BotsBlack from "../assets/images/BotsBlack.jpg";
import BotsBroun from "../assets/images/BotsBroun.jpg";
import Description from "../components/Description";

import "../scss/CardPage.scss";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;

    if (this.props.location.pathname === "/card2") {
      return (
        <Fragment>
          <Helmet>
            <title>Ботиночки Коричневые Dr.Martens</title>
            <meta
              name="description"
              content="Ботиночки Коричневые Dr.Martens"
            />
          </Helmet>
          <Fade delay={700}>
            <div className="navCover"></div>
          </Fade>
          <div className="containerCard">
            <div className="containerImg">
              <img src={BotsBroun} alt="Ботиночки" className="heroCard" />
            </div>
            <Fade delay={700}>
              <div className="headingContainer">
                <h2 className="dark">Ботиночки Коричневые</h2>
                <p>Ликвидация склада Dr.Martens в Екатеринбурге</p>
              </div>
            </Fade>
          </div>
          <div className="containerCardPage">
            {isMobile ? (
              <Fragment>
                <Description
                  title="Ботиночки Коричневые женские Dr. Martens"
                  img={BotsBroun}
                />
              </Fragment>
            ) : (
              <Fade>
                <Description
                  title="Ботиночки Коричневые женские Dr. Martens"
                  img={BotsBroun}
                />
              </Fade>
            )}
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Ботиночки Черные Dr.Martens</title>
          <meta name="description" content="Ботиночки Черные Dr.Martens" />
        </Helmet>
        <Fade delay={700}>
          <div className="navCover"></div>
        </Fade>
        <div className="containerCard">
          <div className="containerImg">
            <img src={BotsBlack} alt="Ботиночки" className="heroCard" />
          </div>
          <Fade bottom delay={700}>
            <div className="headingContainer">
              <h2 className="dark">Ботиночки Черные</h2>
              <p>Ликвидация склада Dr.Martens в Екатеринбурге</p>
            </div>
          </Fade>
        </div>
        <div className="containerCardPage">
          {isMobile ? (
            <Fragment>
              <Description
                title="Ботиночки Черные женские Dr. Martens"
                img={BotsBlack}
              />
            </Fragment>
          ) : (
            <Fade>
              <Description
                title="Ботиночки Черные женские Dr. Martens"
                img={BotsBlack}
              />
            </Fade>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Card;
