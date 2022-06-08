import React from "react";
import "./not-found.css";

export const NotFound = () => (
  <div className="not-found">
    <h2>
      <span role="img" aria-label="Not found">
        {" "}
        😭
      </span>
    </h2>
    <img
      className="not-found-image"
      src={`https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`}
      alt="Pikachu crying because the page requested was not found"
    />
  </div>
);
