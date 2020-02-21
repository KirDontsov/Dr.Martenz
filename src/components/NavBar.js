import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import CallBack from "./CallBack";
import "../scss/Nav.scss";

class NavBar extends Component {
  handleClick(e) {
    this.props.slide(true);
    // this.scrollToTop();
  }

  // scrollToTop() {
  //   let div = document.querySelector(".wrapper");
  //   div.scrollTop = 0;
  // }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="center nav">
          {this.props.routes.map(route =>
            route.id === 1 ? (
              <NavLink
                className={route.className}
                exact={route.isExact}
                activeClassName="active"
                key={route.path}
                to={route.path}
                onClick={e => this.handleClick(e)}
              >
                {route.name}
              </NavLink>
            ) : null
          )}
          <nav>
            {this.props.routes.map(route =>
              route.id > 1 ? (
                <NavLink
                  className={route.className}
                  exact={route.isExact}
                  activeClassName="active"
                  key={route.path}
                  to={route.path}
                  onClick={e => this.handleClick(e)}
                  style={this.props.style}
                >
                  {route.name}
                </NavLink>
              ) : null
            )}
          </nav>
          {/* <CallBack routes={routes.filter(route => route.isMobile)} /> */}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  addClass: state.shutter.addClass,
  path: state.shutter.path
});

const mapDispatch = ({ shutter: { slide, setPath } }) => ({
  slide,
  setPath
});

export default withRouter(connect(mapState, mapDispatch)(NavBar));
