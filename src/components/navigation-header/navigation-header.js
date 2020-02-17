import React from "react";
import { Link } from "react-router-dom";
import MilkTea from "../../assets/milk-tea.png";

import "./navigation-header.scss";

const NavigationHeader = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={MilkTea} alt="MilkeTea" />
    </Link>
    <div className="options" to="/shop">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default NavigationHeader;
