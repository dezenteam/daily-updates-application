import React, { Component } from "react";
import "./productList.css";

import ProductCard from "../../components/ProductCard/ProductCard";
import CardHeadingFilters from "../../components/CardFilters";

export default class ProductList extends Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="row ml-4 mb-3">
          <CardHeadingFilters />

        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

    );
  }
}
