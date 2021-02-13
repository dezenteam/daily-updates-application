import React, { Component } from 'react'
import Carousel from 'react-grid-carousel'
import peacelily from "../../assets/images/samples/peacelily.jpg";
import aglaonemaplant from "../../assets/images/samples/aglaonemaplant.jpg";
import spiderplant from "../../assets/images/samples/spiderplant.jpg";
import cupidsbow from "../../assets/images/samples/cupidsbow.jpg";
import redhibiscusplant from "../../assets/images/samples/redhibiscusplant.jpg";
import vibrantixora from "../../assets/images/samples/vibrantixora.jpg";
import aloevera from "../../assets/images/samples/aloevera.jpg";
import curryplant from "../../assets/images/samples/curryplant.jpg";
import tulsiplant from "../../assets/images/samples/tulsiplant.jpg";
export default class Categories extends Component {
  render() {
    return (
      <div>
        <Carousel cols={3} rows={1} gap={5} loop>
          <Carousel.Item>
            <img
              width="100%"
              src={aglaonemaplant}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={peacelily}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={spiderplant}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={cupidsbow}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={redhibiscusplant}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={ vibrantixora}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={aloevera}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={curryplant}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={ tulsiplant}
              alt="Medicinal Plants"
              title="Medicinal Plants"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
