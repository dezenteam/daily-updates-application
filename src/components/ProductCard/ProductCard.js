import React, { Component } from "react";
import blog01 from "../../Images/chandbali-earrings.jpg";

export class ProductCard extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-3 product-item bg-white pt-4 ">
        <div className="product-img">
          <img src={blog01} width={220} height={243} alt="product" />
          <div className="product-sale">sale</div>
          <div className="product-hover">
            <div className="product-cart">
              <p className="btn btn-secondary btn-block">
                Add To Cart
              </p>
            </div>
          </div>
        </div>
        <div className="product-bio">
          <h4>
            <p >Modern Earrings2</p>
          </h4>
          <p className="product-price">$68.00</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
