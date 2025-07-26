import React from "react";
import "./AnimatedTick.css";

const AnimatedTick = () => {
  return (
    <div className="tick-container">
      <svg className="tick-svg" viewBox="0 0 100 100">
        {/* Circle Path */}
        <circle className="tick-circle" cx="50" cy="50" r="25" />

        {/* Tick Path */}
        <path
          className="tick-check"
          d="M30 52 L45 65 L70 35"
        />
      </svg>
    </div>
  );
};

export default AnimatedTick;
