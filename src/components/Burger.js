import React, { Component, Fragment } from "react";
import { Motion, spring } from "react-motion";
import { noop } from "lodash";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";
import { connect } from "react-redux";

import "../scss/Burger.scss";

const Button = props => (
  <button
    className={classNames("button", props.className)}
    style={props.style}
    onClick={props.onClick || noop}
  >
    {props.children}
  </button>
);

class Burger extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     active: false,
  //     addClass: false
  //   };
  // }

  _onClick() {
    this.props.changeActiveBurger(!this.props.activeBurger);
    this.props.changeClassBurger(!this.props.addClassBurger);
    // this.setState({
    //   active: !this.state.active,
    //   addClass: !this.state.addClass
    // });
  }

  render() {
    let buttonClass = ["button--large"];
    let navClass = ["nav__toggle"];

    if (this.props.addClassBurger) {
      buttonClass.push("active");
      navClass.push("active");
    }
    return (
      <Fragment>
        <Motion
          defaultStyle={{ s: 0.675 }}
          style={{
            s: spring(this.props.activeBurger ? 1 : 0.675, {
              stiffness: 330,
              damping: 14
            })
          }}
        >
          {interpolatingStyles => (
            <Fragment>
              <div className={navClass.join(" ")}>
                <div className="container__mob">
                  {this.props.routes.map(route =>
                    route.id > 1 ? (
                      <NavLink
                        className={route.className}
                        exact={route.isExact}
                        activeClassName="active"
                        key={route.path}
                        to={route.path}
                        onClick={() => this._onClick()}
                      >
                        {route.name}
                      </NavLink>
                    ) : null
                  )}
                  <div className="container__form">
                    <Form type={"BurgerForm"} />
                  </div>
                </div>
              </div>
              {!this.props.active ? (
                <Button
                  className={buttonClass.join(" ")}
                  onClick={this._onClick.bind(this)}
                  style={{
                    transform: "scale(" + interpolatingStyles.s + ")"
                  }}
                >
                  <span
                    className={
                      this.props.activeBurger
                        ? "icon__burger active"
                        : "icon__burger"
                    }
                  />
                </Button>
              ) : null}

              {/* <Link className="logo__mob" to="/">
                РТИ-Торг
              </Link> */}
            </Fragment>
          )}
        </Motion>
      </Fragment>
    );
  }
}

const mapState = state => ({
  active: state.callBack.active,
  activeBurger: state.callBack.activeBurger,
  addClassBurger: state.callBack.addClassBurger
});

const mapDispatch = ({
  callBack: { changeClass, changeActive, changeActiveBurger, changeClassBurger }
}) => ({
  changeClass,
  changeActive,
  changeClassBurger,
  changeActiveBurger
});

export default connect(mapState, mapDispatch)(Burger);
