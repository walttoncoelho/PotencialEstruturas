import React, { useState } from "react";
import SliderData from "./data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "../style";

export function Galeria({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;


/* Play automático no carrousel */
  setTimeout(() => {
    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }, 3000);

  console.log(setTimeout);
  

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <ArrowRight>
        <FaArrowAltCircleLeft onClick={prevSlide} />
      </ArrowRight>
      <ArrowLeft>
        <FaArrowAltCircleRight onClick={nextSlide} />
      </ArrowLeft>

      {SliderData.map((slide, index) => {
        return (
          <>
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.img} alt="banner" />}
            </div>
          </>
        );
      })}
    </>
  );
}
