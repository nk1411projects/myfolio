import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports touch
    const checkDevice = () => {
      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(touchSupport);
    };

    checkDevice();

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic hover detection on buttons and links
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Smooth trail effect using linear interpolation
  useEffect(() => {
    if (isMobile || isHidden) return;

    let frameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const tick = () => {
      setTrailPosition((prev) => ({
        x: lerp(prev.x, position.x, 0.15),
        y: lerp(prev.y, position.y, 0.15),
      }));
      frameId = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(frameId);
  }, [position, isHidden, isMobile]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Central tracking dot */}
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: isHovering ? '#8B5CF6' : '#3B82F6',
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      {/* Lagging outline circle */}
      <div
        className="cursor-outline hidden md:block"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          borderColor: isHovering ? 'rgba(139, 92, 246, 0.8)' : 'rgba(59, 130, 246, 0.4)',
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.4 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
