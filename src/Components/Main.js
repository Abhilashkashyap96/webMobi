import React, { Component } from "react";
import Star from "../Assets/favourite.png";
import HamBurger from "../Assets/ham menu 1.svg";
import Plus from "../Assets/plus.png";
import BlackHamBurger from "../Assets/ham menu.svg";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="btn-main-top">
          <button>Live Polls</button>
          <button>Audience Q&A</button>
          <button>Ideas</button>
          <button>Analytics</button>
        </div>
        <div className="left-right">
          <div className="left-main">
            <div className="top">
              <h5>List of Polls</h5>
              <button>
                <img src={Plus} alt="" /> Create Poll
              </button>
            </div>

            <div className="main-container">
              <div className="section">
                <div className="img-1">
                  <img src={Star} alt="" />
                </div>
                <div className="head">
                  <h6>Rating Poll</h6>
                  <div className="small-div">
                    <h6>Votes : 2</h6>
                  </div>
                </div>
              </div>
              <p>Which is your favourite fruit?</p>
              <div className="line"></div>
              <div className="section2">
                <div className="img-2">
                  <img src={HamBurger} alt="" />
                </div>
                <div className="head2">
                  <h6>Multiple Choice</h6>
                  <div className="small-div2">
                    <h6>Votes : 2</h6>
                  </div>
                </div>
              </div>
              <p>Which is your favourite fruit?</p>
              <button>
                <img src={Plus} alt="" />
                Create Poll
              </button>
            </div>
          </div>
          <div className="right-main">
            <div className="right-main-top">
              <h5>Live</h5>
              <button>
                <img src={BlackHamBurger} alt="" /> All Results
              </button>
            </div>
            <div className="section-2">
              <div className="section-2-top">
                <p>
                  What is your favourite travel destination? Describe in breif
                </p>
                <div className="nums">
                  <div className="number">0</div>
                  <div className="number">0</div>
                  <div className="number">5</div>
                </div>
              </div>
              <div className="blank"></div>
              <div className="section-2-bottom">
                <div className="man-u">
                  <p>Man U</p>
                  <div className="per">
                    <div className="percent"></div>
                  </div>
                  <p>63%</p>
                </div>
                <div className="barca">
                  <p>Barca</p>
                  <div className="per">
                    <div className="percent"></div>
                  </div>
                  <p>5%</p>
                </div>
                <div className="real">
                  <p>real</p>
                  <div className="per">
                    <div className="percent"></div>
                  </div>
                  <p>30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
