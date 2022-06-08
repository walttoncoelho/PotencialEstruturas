import React from "react";
import { Carousel } from "react-bootstrap";
import "../Carrousel/style/position.css";

import image1 from "../../assets/banner/banner1.png";



import { GridImg } from "./style";

export function CarrouselContainer() {
  return (
    <>
    <GridImg>
    <Carousel variant="dark position">
      <Carousel.Item>
        <img className="position" src={image1} alt="First slide" />

        <Carousel.Caption>
{/*            <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>  */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="carousel-item">
        <img className="position" src={image1} alt="Second slide" />
        {/* Background image */}

        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="position" src={image1} alt="Third slide" />

        <Carousel.Caption>
          {/*  <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
     

    </Carousel>
    </ GridImg>
    </>
  );
}
