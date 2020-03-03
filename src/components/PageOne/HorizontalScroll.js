import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
// import Bubbles from "./Bubbles";
import Draggable from "react-draggable";
import "../../scss/Vars.scss";

import SlideOne from "../../slides/PageOne/SlideOne";
import SlideTwo from "../../slides/PageOne/SlideTwo";
import SlideThree from "../../slides/PageOne/SlideThree";

import SlideTwoDelivery from "../../slides/PageDelivery/SlideTwoDelivery.js";
import SlideThreeDelivery from "../../slides/PageDelivery/SlideThreeDelivery.js";

import SlideTwoPayment from "../../slides/PagePayment/SlideTwoPayment.js";

import SlideTwoContacts from "../../slides/PageContacts/SlideTwoContacts.js";
import SlideThreeContacts from "../../slides/PageContacts/SlideThreeContacts.js";

class ScrollingHorizontally extends Component {
  constructor() {
    super();
    this.state = {
      deltaX: 0
    };
  }

  handleDrag = (e, ui) => {
    this.setState({
      deltaX: ui.deltaX * 2
    });
  };
  render() {
    const { title, subtitle } = this.props;
    if (title === "Доставка") {
      return (
        <Draggable axis="x" onDrag={this.handleDrag} draggable="false">
          <div>
            <HorizontalScroll
              reverseScroll={true}
              config={{ stiffness: 160, damping: 110 }}
              animValues={this.state.deltaX}
            >
              <SlideOne
                title={title}
                subtitle={subtitle}
                className="slideScreen"
              />
              <SlideTwoDelivery className="slideScreen" />
              <SlideThreeDelivery className="slideScreen" />
            </HorizontalScroll>
          </div>
        </Draggable>
      );
    } else if (title === "Оплата") {
      return (
        <Draggable axis="x" onDrag={this.handleDrag} draggable="false">
          <div>
            <HorizontalScroll
              reverseScroll={true}
              config={{ stiffness: 160, damping: 110 }}
              animValues={this.state.deltaX}
            >
              <SlideOne
                title={title}
                subtitle={subtitle}
                className="slideScreen"
              />
              <SlideTwoPayment className="slideScreen" />
            </HorizontalScroll>
          </div>
        </Draggable>
      );
    } else if (title === "Контакты") {
      return (
        <Draggable axis="x" onDrag={this.handleDrag} draggable="false">
          <div>
            <HorizontalScroll
              reverseScroll={true}
              config={{ stiffness: 160, damping: 110 }}
              animValues={this.state.deltaX}
            >
              <SlideOne
                title={title}
                subtitle={subtitle}
                className="slideScreen"
              />
              <SlideTwoContacts className="slideScreen" />
              <SlideThreeContacts className="slideScreen" />
            </HorizontalScroll>
          </div>
        </Draggable>
      );
    }

    return (
      <Draggable axis="x" onDrag={this.handleDrag} draggable="false">
        <div>
          <HorizontalScroll
            reverseScroll={true}
            config={{ stiffness: 160, damping: 110 }}
            animValues={this.state.deltaX}
          >
            <SlideOne
              title={title}
              subtitle={subtitle}
              className="slideScreen"
            />
            <SlideTwo className="slideScreen" />
            <SlideThree className="slideScreen" />
          </HorizontalScroll>
          <div className="arrow-container">
            <div className="arrow" />
          </div>
        </div>
      </Draggable>
    );
  }
}

export default ScrollingHorizontally;
