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
    
    useEffect(() => {
      const handleScroll = () => {
        if (!elementRef.current) return;
        
        // Calculate progress within range with improved smoothing
        const total = props.range.out - props.range.in;
        const current = window.scrollY - props.range.in;
        
        // Use easeOutCubic easing function for smoother animation
        let newProgress = Math.min(1, Math.max(0, current / total));
        
        // Apply easing function to make animation feel more polished
        // easeOutCubic: t => 1 - Math.pow(1 - t, 3)
        newProgress = 1 - Math.pow(1 - newProgress, 3);
        
        setProgress(newProgress);
        setIsVisible(window.scrollY >= props.range.in && window.scrollY < props.range.out);
      };
      
      // Initial check
      handleScroll();
      
      // Add event listener with passive flag for better performance
      window.addEventListener("scroll", handleScroll, { passive: true });
      
      // Clean up event listener when component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [props.contentID, props.range]);

    // Calculate transform values
    const slideDistance = 120; // Increased for more dramatic effect
    const translateX = props.direction === 'right' 
      ? (1 - progress) * slideDistance 
      : (1 - progress) * -slideDistance;
    
    // Calculate opacity with slight delay for staggered effect
    const opacityProgress = Math.max(0, (progress - 0.1) * 1.1);
    
    return (
      <div 
        id={props.contentID} 
        ref={elementRef}
        className={`${props.class} will-change-transform`}
        style={{
          opacity: isVisible ? opacityProgress : 0,
          transform: `translateX(${translateX}px)`,
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