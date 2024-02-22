import "./sidebar.scss";
import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isOpened } = this.state;
    const containerClassnames = classnames("sidebar", { opened: !isOpened });

    return (
      <div className={containerClassnames}>
        <div className="sidebar__header">
          <div className="sidebar__logo__wrapper">
            <img src={logo} className="sidebar__logo" alt="TensorFlow logo" />
            <span className="sidebar__logo__text">TensorFlow</span>
          </div>
          <button onClick={this.toggleSidebar} className="sidebar__toggle">
            <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
          </button>
        </div>

        <div className="routes__settings">
          <div className="routes">
            {routes.map((route, id) => (
              <div
                key={route.title}
                onClick={() => this.goToRoute(route.path)}
                className={`routes__item ${
                  id === 1 ? "routes__item--active" : ""
                }`}
              >
                <FontAwesomeIcon icon={route.icon} />
                <span className="routes__item__text">{route.title}</span>
              </div>
            ))}
          </div>

          <div className="routes">
            {bottomRoutes.map((route) => (
              <div
                key={route.title}
                onClick={() => this.goToRoute(route.path)}
                className="routes__item"
              >
                <FontAwesomeIcon icon={route.icon} />
                <span className="routes__item__text">{route.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
