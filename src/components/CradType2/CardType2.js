import React, { Component } from 'react'
import CountUp from 'react-countup';



export class CardType2 extends Component {
    render() {
        return (
            <div class="container-fluid bg-lightgrey">
                <div class="row  ">
                    <div class="col-11 mt-2  mx-1 bg-dark text-white">

                        <h3 style={{ color: 'wheat', padding: "20px" }} >Total Employees: <CountUp end={8765} duration={6} /> </h3>
                    </div>
                    <div class="col-6  mt-2  mx-1 bg-dark text-white">

                        <h3 style={{ color: 'wheat', padding: "20px" }} > Total Departments: <CountUp end={65} duration={15} /> </h3>
                    </div>
                    <div class="col-sm-3 p-3 mt-2 mx-1 bg-dark text-white">

                        <h3 style={{ color: 'wheat', padding: "20px" }} > Tech Leads: <CountUp end={85} duration={6} /> </h3>
                    </div>
                    <div class="col-sm-2 p-3 mt-2 mx-1 bg-dark text-white">

                        <h3 style={{ color: 'wheat', padding: "20px" }} > Users: <CountUp end={188865} duration={6} /> </h3>
                    </div>
                </div>
                <div class="row  ">
                    <div class="col-sm-7 p-3 mt-2 mx-1 bg-dark text-white">
                        <h3 style={{ color: 'wheat', padding: "20px" }} >Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <h3 style={{ color: 'wheat', padding: "20px" }} >Total Employees: <CountUp end={8765} duration={6} /> </h3>
                    </div>
                    <div class="col-sm-4 p-3 mt-2 mx-1 bg-dark text-white">
                        <h3 style={{ color: 'wheat', padding: "20px" }} >Sponsors</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <h3 style={{ color: 'wheat', padding: "20px" }} > franchise: <CountUp end={865} duration={6} /> </h3>
                    </div>
                </div>
                <div class="row  ">
                    <div class="col-sm-11 p-3 mt-2 mx-1 bg-dark text-white">
                        <h3 style={{ color: 'wheat', padding: "20px" }} >Maintained</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <h3 style={{ color: 'wheat', padding: "20px" }} > Supporting Countries around the world: <CountUp end={85} duration={10} /> </h3>
                    </div>
                </div>
            </div>


        )
    }
}

export default CardType2
