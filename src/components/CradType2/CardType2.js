import React, { Component } from 'react'
import CountUp from 'react-countup';



export class CardType2 extends Component {
    render() {
        return (
            <div class="container bg-lightgrey">
                <div class="row  ">
                    <div class="col-sm-7 p-3 mt-2 mx-1 bg-dark text-white">
                    <h3 style={{color:'wheat'}} >Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <h3 style={{color:'wheat'}} >Total Employees: <CountUp end={8765} duration={6} /> </h3>
                    </div>
                    <div class="col-sm-4 p-3 mt-2 mx-1 bg-dark text-white">
                    <h3 style={{color:'wheat'}} >Sponsors</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <h3 style={{color:'wheat'}} > franchise: <CountUp end={865} duration={6} /> </h3>
                    </div>
                </div>
                <div class="row  ">
                        <div class="col-sm-11 p-3 mt-2 mx-1 bg-dark text-white">
                            <h3 style={{color:'wheat'}} >Maintained</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <h3 style={{color:'wheat'}} > Supporting Countries around the world: <CountUp end={85} duration={10} /> </h3>
                        </div>
                </div>
            </div>


        )
    }
}

export default CardType2
