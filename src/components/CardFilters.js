import React, { Component } from "react";

export class CardHeadingFilters extends Component {
  render() {
    return (


      <div className="col-xs-12 col-sm-12 col-md-12 shop-filter">
        <ul className="list-inline">
          <li>
            <a className="active-filter" href="./products" data-filter="*">
              All Products
            </a>
          </li>
          <li>
            <a href="./products" data-filter="filter-best">
              Best Selling
            </a>
          </li>
          <li>
            <a href="./products" data-filter="filter-featured">
              Featured
            </a>
          </li>
          <li>
            <a href="./products" data-filter="filter-sale">
              On Sale
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CardHeadingFilters;
