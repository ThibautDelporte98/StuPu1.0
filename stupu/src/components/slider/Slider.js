import ArrowIcon from "components/button/ArrowIcon";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  handleDragStart,
  handleDragMove,
  handleDragEnd,
  handlePrevious,
  handleNext,
} from "utils/sliderUtils";
import "./Slider.css";

const Slider = ({ items, initialItemsToShow, draggable = true, itemClassName = "" , btnColorChange }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const sliderRef = useRef(null);

  const updateItemsToShow = useCallback(() => {
    if (window.innerWidth <= 768) {
      setItemsToShow(1);
    } else if (window.innerWidth <= 1080) {
      setItemsToShow(2);
    } else {
      setItemsToShow(initialItemsToShow);
    }
  }, [initialItemsToShow]);
  
  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [updateItemsToShow]);

  const maxPosition = Math.max(0, items.length - itemsToShow);

  const prevSlide = useCallback(() => {
    handlePrevious(currentPosition, setCurrentPosition);
  }, [currentPosition]);

  const nextSlide = useCallback(() => {
    handleNext(currentPosition, setCurrentPosition, maxPosition);
  }, [currentPosition, maxPosition]);

  return (
    <div className="slider-container p-1">
      <div
        ref={sliderRef}
        className="items"
        style={{
          transform: `translateX(calc(-${window.innerWidth <= 768 ? currentPosition * 100 : (currentPosition * 100) / (itemsToShow === 1 ? 2 : itemsToShow)}%  + ${dragDistance}px))`,
          transition: isDragging ? "none" : "transform 0.3s ease",
        }}
        onMouseDown={(e) =>
          draggable && handleDragStart(e, setIsDragging, setStartPosition)
        }
        onMouseMove={(e) =>
          draggable && handleDragMove(e, isDragging, startPosition, setDragDistance)
        }
        onMouseUp={() =>
          draggable && handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)
        }
        onMouseLeave={() =>
          draggable && handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)
        }
        onTouchStart={(e) =>
          draggable && handleDragStart(e, setIsDragging, setStartPosition)
        }
        onTouchMove={(e) =>
          draggable && handleDragMove(e, isDragging, startPosition, setDragDistance)
        }
        onTouchEnd={() =>
          draggable && handleDragEnd(dragDistance, setIsDragging, setDragDistance, currentPosition, setCurrentPosition, maxPosition)
        }
      >
        {items.map((item, index) => (
          <div
            className={`slide-item ${itemClassName} ${
              index >= currentPosition && index < currentPosition + itemsToShow
                ? "active"
                : "none-active"
            }`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-content-center">
        <button
          onClick={prevSlide}
          disabled={currentPosition === 0 || items.length <= itemsToShow}
          className="button button-slide "

        >
        <ArrowIcon width={24} height={24} fill={btnColorChange} direction={'left'} />

        </button>
        <button
          onClick={nextSlide}
          disabled={currentPosition === maxPosition}
          className="button button-slide"
        >
          <ArrowIcon width={24} height={24} fill={btnColorChange} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
