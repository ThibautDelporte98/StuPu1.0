import { useEffect } from 'react';

const useLockBodyScroll = (isLocked) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Lock or unlock body scroll based on isLocked
    document.body.style.overflow = isLocked ? 'hidden' : originalStyle;

    // Clean up to restore body overflow style after the component is unmounted or after isLocked changes
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);  // Re-run when isLocked changes
};

export default useLockBodyScroll;
