import React, { Component } from "react";
import LeftArrow from "../Assets/left-arrow.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="navbar">
          <img src={LeftArrow} alt="" />
          <div className="name">
            <h1>Webmobi-#40982</h1>
            <div className="small-div">
              <h5>Expired</h5>
            </div>
            <div className="date">
                <h5>03 January,2021 - 10 January,2021</h5>
            </div>
          </div>
          <div className="btn">
            <button className="btn-1">Share</button>
            <button className="btn-2">Present</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
