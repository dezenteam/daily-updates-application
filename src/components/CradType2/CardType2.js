import React, { Component } from 'react'



export class CardType2 extends Component {
    render() {
        return (
            <div class="container bg-lightgrey">
                <div class="row mx-1 ">
                    <div class="col-sm-7 p-3 mt-2 mx-1 bg-dark text-white">
                    <h3 style={{color:'wheat'}} >Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4 p-3 mt-2 mx-1 bg-dark text-white">
                    <h3 style={{color:'wheat'}} >Sponsors</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
                <div class="row  ">
                        <div class="col-sm-11 p-3 mt-2 mx-1 bg-dark text-white">
                            <h3 style={{color:'wheat'}} >Maintained</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                </div>
            </div>


        )
    }
}

export default CardType2
