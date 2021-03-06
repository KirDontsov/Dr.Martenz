import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Form from "./Form";
import { connect } from "react-redux";

import "../scss/CallBack.scss";

const Button = props => (
  <div className={classNames(props.className)} onClick={props.onClick}>
    {props.children}
  </div>
);

class CallBack extends Component {
  openModal() {
    this.props.changeClass(!this.props.addClass);
    this.props.changeActive(!this.props.active);
  }

  render() {
    let buttonClass = ["callBack"];
    let navClass = ["nav__toggle"];
    let header = ["burgerForm"];

    if (this.props.addClass) {
      buttonClass.push("active");
      navClass.push("active");
    }
    return (
      <Fragment>
        <div className={navClass.join(" ")}>
          <div className="container__mob padding">
            <Form type={"BurgerForm"} />
          </div>
        </div>
        {!this.props.activeBurger ? (
          <Button
            className={buttonClass.join(" ")}
            onClick={() => {
              this.openModal();
            }}
          >
            <span
              className={
                this.props.active
                  ? "icon__burger nav active"
                  : "icon__burger nav"
              }
            />
            Оставить заявку
          </Button>
        ) : null}
      </Fragment>
    );
  }
}

const mapState = state => ({
  addClass: state.callBack.addClass,
  active: state.callBack.active,
  activeBurger: state.callBack.activeBurger
});

const mapDispatch = ({ callBack: { changeClass, changeActive } }) => ({
  changeClass,
  changeActive
});

export default connect(mapState, mapDispatch)(CallBack);
