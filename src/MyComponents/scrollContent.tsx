"use client";
import React, { useEffect, useState, useRef } from 'react'

interface Props {
  contentID: string
  range: {
    in: number
    out: number
  }
  class?: string
  direction?: 'left' | 'right'
  children: React.ReactNode
}

const ScrollContent = (props: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(() => {
      // Get initial window width
      setWindowWidth(window.innerWidth);
      
      // Update window width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      const handleScroll = () => {
        if (!elementRef.current) return;
        
        // Calculate progress within range with improved smoothing
        const total = props.range.out - props.range.in;
        const current = window.scrollY - props.range.in;
        
        // Use easeOutCubic easing function for smoother animation
        let newProgress = Math.min(1, Math.max(0, current / total));
        
        // Apply easing function to make animation feel more polished
        newProgress = 1 - Math.pow(1 - newProgress, 3);
        
        setProgress(newProgress);
        setIsVisible(window.scrollY >= props.range.in && window.scrollY <= props.range.out);
      };
      
      // Initial check
      handleScroll();
      
      // Add event listeners
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });
      
      // Clean up event listeners
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, [props.contentID, props.range]);

    // Calculate transform values - use full viewport width for initial position
    const startPosition = props.direction === 'right' ? windowWidth : -windowWidth;
    const endPosition = 0;
    
    // Linear interpolation between start and end positions based on progress
    const translateX = startPosition + (endPosition - startPosition) * progress;
    
    return (
      <div 
        id={props.contentID} 
        ref={elementRef}
        className={`${props.class} will-change-transform`}
        style={{
          opacity: isVisible ? progress : 0,
          transform: props.direction ? `translateX(${translateX}px)` : '',
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {props.children}
      </div>
    )
}

// Set default props
ScrollContent.defaultProps = {
  direction: 'left',
  class: ''
};

export default ScrollContent