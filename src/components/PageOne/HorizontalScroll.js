import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
// import Bubbles from "./Bubbles";
import Draggable from "react-draggable";
import "../../scss/Vars.scss";

import SlideOne from "../../slides/PageOne/SlideOne";
import SlideTwo from "../../slides/PageOne/SlideTwo";
import SlideThree from "../../slides/PageOne/SlideThree";

class ScrollingHorizontally extends Component {
  constructor() {
    super();
    this.state = {
      deltaX: 0
    };
  }

  handleDrag = (e, ui) => {
    // this.state.animValues + deltaX.
    this.setState({
      deltaX: ui.deltaX * 2
    });
  };
  render() {
    const child = {
      width: `100vw`,
      height: `100%`,
      content: "",
      display: "block"
    };
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
              <SlideOne style={child} title={title} subtitle={subtitle} />
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
            <SlideOne style={child} title={title} subtitle={subtitle} />
            <SlideTwo style={child} />
            <SlideThree style={child} />
          </HorizontalScroll>
        </div>
      </Draggable>
    );
  }
}

export default ScrollingHorizontally;
