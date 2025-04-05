"use client";

import { useEffect, useState } from "react";

interface BackgroundFrameProps {
  className?: string;
}

export default function BackgroundFrame({ className = "" }: BackgroundFrameProps) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [frameImageSrc, setFrameImageSrc] = useState("/construction_frame.svg");
  
  useEffect(() => {
    // Initialize with current window width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Update image source based on window width
    if (windowWidth >= 1444) {
      setFrameImageSrc("/constructionHDframe-1920x1080.svg");
    } else if (windowWidth <= 1080) {
      setFrameImageSrc("/constructionMobileframe-960x540.svg");
    } else {
      setFrameImageSrc("/constructionMobileframe-960x540.svg");
    }

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div 
      className={`absolute inset-0 w-full h-full ${className}`} 
      style={{ 
        backgroundImage: `url(${frameImageSrc})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
      aria-hidden="true"
    />
  );
}