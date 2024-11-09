import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  handleDragStart,
  handleDragMove,
  handleDragEnd,
  handlePrevious,
  handleNext,
} from "utils/sliderUtils";
import "./Slider.css";

const Slider = ({ items, initialItemsToShow = 2, draggable = true }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const sliderRef = useRef(null);

  const maxPosition = items.length - itemsToShow;

  // Responsive itemsToShow adjustment based on screen width
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth <= 768 ? 1 : initialItemsToShow);
    };
    handleResize(); // Call once to set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialItemsToShow]);

  const prevSlide = useCallback(() => {
    handlePrevious(currentPosition, setCurrentPosition);
  }, [currentPosition]);

  const nextSlide = useCallback(() => {
    handleNext(currentPosition, setCurrentPosition, maxPosition);
  }, [currentPosition, maxPosition]);

  return (
    <div className="slider-container pt-1">
      <div
        ref={sliderRef}
        className="lessons"
        style={{
          transform: `translateX(calc(-${(currentPosition * 100) / itemsToShow}% + ${dragDistance}px))`,
          transition: isDragging ? "none" : "transform 0.3s ease",
        }}
        onMouseDown={(e) => draggable && handleDragStart(e, setIsDragging, setStartPosition)}
        onMouseMove={(e) => draggable && handleDragMove(e, isDragging, startPosition, setDragDistance)}
        onMouseUp={() => draggable && handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)}
        onMouseLeave={() => draggable && handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)}
        onTouchStart={(e) => draggable && handleDragStart(e, setIsDragging, setStartPosition)}
        onTouchMove={(e) => draggable && handleDragMove(e, isDragging, startPosition, setDragDistance)}
        onTouchEnd={() => draggable && handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)}
      >
        {items.map((item, index) => (
          <div className="slide-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-content-center">
        <button onClick={prevSlide} disabled={currentPosition === 0} className="button button-slide">
          Vorige
        </button>
        <button onClick={nextSlide} disabled={currentPosition === maxPosition} className="button">
          Volgende
        </button>
      </div>
    </div>
  );
};

export default Slider;
