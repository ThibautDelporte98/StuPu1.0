const DRAG_THRESHOLD = 50;

export const handleDragStart = (e, setIsDragging, setStartPosition) => {
  e.preventDefault();
  setIsDragging(true);
  setStartPosition(e.clientX || e.touches[0].clientX);
};

export const handleDragMove = (e, isDragging, startPosition, setDragDistance) => {
  if (!isDragging) return;
  const currentX = e.clientX || e.touches[0].clientX;
  setDragDistance(currentX - startPosition);
};

export const handleDragEnd = (
  dragDistance,
  setIsDragging,
  setDragDistance,
  currentPosition,
  setCurrentPosition,
  maxPosition
) => {
  setIsDragging(false);
  if (dragDistance > DRAG_THRESHOLD && currentPosition > 0) {
    setCurrentPosition((prev) => prev - 1);
  } else if (dragDistance < -DRAG_THRESHOLD && currentPosition < maxPosition) {
    setCurrentPosition((prev) => prev + 1);
  }
  setDragDistance(0);
};

export const handlePrevious = (currentPosition, setCurrentPosition) => {
  if (currentPosition > 0) {
    setCurrentPosition((prev) => prev - 1);
  }
};

export const handleNext = (currentPosition, setCurrentPosition, maxPosition) => {
  if (currentPosition < maxPosition) {
    setCurrentPosition((prev) => prev + 1);
  }
};
