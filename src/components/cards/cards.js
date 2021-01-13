import React, { Component } from 'react';
import './cards.scss';
import {Row,Col} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'

export class Cards extends Component {
    render() {
        return (
     <div class="container">
         <div class="row">
            <div class="col-sm">
                 <Row className='icon-row'  onClick={()=> this.displayContent(3)}  >
                     <Col><FontAwesomeIcon  icon={faCocktail}   className='icons-sizes' /></Col>
                     <Col className='icon-text'>Card1</Col>
                 </Row>
            </div>
            <div class="col-sm">
            <Row className='icon-row'  onClick={()=> this.displayContent(3)}  >
                     <Col><FontAwesomeIcon  icon={faCocktail}   className='icons-sizes' /></Col>
                     <Col className='icon-text'>Card1</Col>
                 </Row>
            </div>
            <div class="col-sm">
            <Row className='icon-row'  onClick={()=> this.displayContent(3)}  >
                     <Col><FontAwesomeIcon  icon={faCocktail}   className='icons-sizes' /></Col>
                     <Col className='icon-text'>Card1</Col>
                 </Row>
            </div>
            <div class="col-sm">
            <Row className='icon-row'  onClick={()=> this.displayContent(3)}  >
                     <Col><FontAwesomeIcon  icon={faCocktail}   className='icons-sizes' /></Col>
                     <Col className='icon-text'>Card1</Col>
                 </Row>
            </div>
        </div>
   </div>
        )
    }
}

export default Cards
