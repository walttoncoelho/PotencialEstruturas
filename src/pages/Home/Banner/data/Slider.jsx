import React from 'react'

import SliderData from './data'

export  function Slider(slide) {
  return (
    <div>
      {SliderData.map((item) => {
        return (
          <div className="slide">
            <img src={item.img} alt="banner" />
          </div>
        );
      })}
    </div>
  );
}
