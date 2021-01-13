import React, { Component } from 'react';
import './dashboard.scss';
 
export default class Dashboard extends Component {
  render () {
    return (
      <div className="row">
      <div className="col-md-4 stretch-card ">
        <div className="card bg-gradient-danger text-white">
          <div className="card-body">
           
            <h4 className="font-weight-normal mb-3">Weekly Sales 
            </h4>
            <h2 className="mb-5">$ 15,0000</h2>
            <h6 className="card-text">Increased by 60%</h6>
          </div>
        </div>
      </div>
      <div className="col-md-4 stretch-card ">
        <div className="card bg-gradient-info text-white">
          <div className="card-body">
           
            <h4 className="font-weight-normal mb-3">Weekly Orders 
            </h4>
            <h2 className="mb-5">45,6334</h2>
            <h6 className="card-text">Decreased by 10%</h6>
          </div>
        </div>
      </div>
      <div className="col-md-4 stretch-card ">
        <div className="card bg-gradient-success text-white">
          <div className="card-body">
           
            <h4 className="font-weight-normal mb-3">Visitors Online 
            </h4>
            <h2 className="mb-5">95,5741</h2>
            <h6 className="card-text">Increased by 5%</h6>
          </div>
        </div>
      </div>
    
    </div>
    );
  }
}