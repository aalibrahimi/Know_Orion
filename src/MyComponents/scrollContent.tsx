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
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isInView, setIsInView] = useState(false);
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
        
        // Check if element is in viewport
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const elementVisible = elementTop < window.innerHeight * 0.75;
        
        if (elementVisible && !hasAnimated) {
          // Start animation when element comes into view for the first time
          setIsInView(true);
          setHasAnimated(true);
        }
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
    }, [hasAnimated, props.contentID]);

    // Calculate initial position based on direction
    const startPosition = props.direction === 'right' ? windowWidth : -windowWidth;
    
    return (
      <div 
        id={props.contentID} 
        ref={elementRef}
        className={`${props.class} will-change-transform`}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated 
            ? 'translateX(0)' 
            : props.direction ? `translateX(${startPosition}px)` : '',
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
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
