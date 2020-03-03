import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Burger from "./components/Burger";
import NavBar from "./components/NavBar";
import Shutter from "./components/Shutter";
import { routes } from "./routes";

const supportsHistory = "pushState" in window.history;

class App extends Component {
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

    const renderSwitch = () => (
      <Switch>
        {routes.map(route => {
          const component = route.component;
          return (
            <Route
              key={route.id}
              exact={route.isExact}
              path={route.path}
              component={component}
              status={route.status}
            />
          );
        })}
      </Switch>
    );

    if (isMobile) {
      return (
        <Router forceRefresh={!supportsHistory}>
          <Fragment>
            <Helmet>
              <title>РТИ-Торг</title>
              <meta name="description" content="РТИ-Торг" />
            </Helmet>
            <Burger routes={routes.filter(route => route.isMobile)} />
            {renderSwitch()}
          </Fragment>
        </Router>
      );
    } else {
      return (
        <Router forceRefresh={!supportsHistory}>
          <Fragment>
            <Helmet>
              <title>РТИ-Торг</title>
              <meta name="description" content="РТИ-Торг" />
            </Helmet>

            <Shutter />
            <NavBar routes={routes.filter(route => route.isNavBar)} />
            {renderSwitch()}
          </Fragment>
        </Router>
      );
    }
  }
}

export default App;
