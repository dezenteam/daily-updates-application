import React, { Component } from "react";
import "./plants.scss";

export default class Plants extends Component {
  render() {
    return (
      <div>
        <div className="upgradePlanter section-container">
          <div className="asideSection upgradeplant">
            <a href="/buy-pots-planters-online.html">
              <img
                className=" lazyloaded"
                src={require("../../assets/images/samples/tile-plantersnewjan.jpg")}
                alt="upgrade planter"
              />
            </a>
          </div>
          <div className="asideSection secDesc upgradeplantext">
            <h2>Planters on fleek!</h2>
            <p>
              The perfect companions for your green members and also decor
              pieces in their own right, our planters truly amp up your space.
              There is a plant for every home and a planter for every plant.
              Browse our extensive in-house collection to find your match.
            </p>
            <a
              className="transition linkArrow"
              href="/buy-pots-planters-online.html"
            >
              Explore More
            </a>
          </div>
        </div>
        <div className="gift section-container">
          <div className="asideSection homegifttext secDesc">
            <h2>Gifts that Grow</h2>
            <p>
              Be it festivals, birthdays or anniversaries, gifting plants
              signifies hope - for the future. What's better than gifts that
              grow with you and remind you of happy times. You select, we
              deliver, and happiness is guaranteed.
            </p>
            <a className="transition linkArrow" href="/green-gifting.html">
              Gift Now
            </a>
          </div>
          <div className="asideSection homegift mobileImgHide">
            <a href="/diwali-gifting">
            
              <img
                className=" lazyloaded"
                src={require("../../assets/images/samples/tile-giftingnewjan.jpg")}
                alt="upgrade planter"
              />
            </a>
          </div>
        </div>
        <div className="plantParent section-container">
          <div className="tableCell">
          <img
                className=" lazyloaded"
                src={require("../../assets/images/samples/Plant-Parent-Club-Final-Logo.png")}
                alt="upgrade planter"
              />
           
            <p>
              Become a member and win coins and exclusive rewards every time you
              shop.
            </p>
            <a className="plant-parent" href="/plant-parent-club">
              Join Now
            </a>
          </div>
        </div>
      </div>
    );
  }
}
