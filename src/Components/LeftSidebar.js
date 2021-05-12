import React, { Component } from "react";
import Event from "../Assets/Event.svg";
import Team from "../Assets/Team.png";
import Analytics from "../Assets/Analytics.png";
import Result from "../Assets/Result.svg";

class LeftSidebar extends Component {
  render() {
    return (
      <div>
        <div class="sidenav">
          <div className="inner-container">
            <div className="logo"></div>
            <div className="leftsidebar">
              <img src={Event} alt="" />
              <a href="">Events</a>
            </div>
            <div className="leftsidebar">
              <img src={Team} alt="" />
              <a href="">Teams</a>
            </div>
            <div className="leftsidebar">
              <img src={Analytics} alt="" />
              <a href="">Analytics</a>
            </div>
            <div className="leftsidebar">
              <img src={Result} alt="" />
              <a href="">Results</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSidebar;
