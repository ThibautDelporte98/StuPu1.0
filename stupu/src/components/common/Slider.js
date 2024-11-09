// Slider.js
import React, { useState, useRef } from "react";
import {
  handleDragStart,
  handleDragMove,
  handleDragEnd,
  handlePrevious,
  handleNext,
} from "utils/sliderUtils";
import "./Slider.css"; // Create a CSS file to style the slider if needed

const Slider = ({ items, itemsToShow }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const sliderRef = useRef(null);

  const maxPosition = items.length - itemsToShow;

  return (
    <div className="slider-container ptb-1-05">
      <div
        ref={sliderRef}
        className="lessons"
        style={{
          transform: `translateX(calc(-${(currentPosition * 100) / itemsToShow}% + ${dragDistance}px))`,
          transition: isDragging ? "none" : "transform 0.3s ease",
        }}
        onMouseDown={(e) => handleDragStart(e, setIsDragging, setStartPosition)}
        onMouseMove={(e) => handleDragMove(e, isDragging, startPosition, setDragDistance)}
        onMouseUp={() =>
          handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)
        }
        onMouseLeave={() =>
          handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)
        }
        onTouchStart={(e) => handleDragStart(e, setIsDragging, setStartPosition)}
        onTouchMove={(e) => handleDragMove(e, isDragging, startPosition, setDragDistance)}
        onTouchEnd={() =>
          handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)
        }
      >
        {items.map((item, index) => (
          <div className="slide-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-content-center">
        <button onClick={() => handlePrevious(currentPosition, setCurrentPosition)} disabled={currentPosition === 0} className="button button-slide">
          Vorige
        </button>
        <button onClick={() => handleNext(currentPosition, setCurrentPosition, maxPosition)} disabled={currentPosition === maxPosition} className="button">
          Volgende
        </button>
      </div>
    </div>
  );
};

export default Slider;
