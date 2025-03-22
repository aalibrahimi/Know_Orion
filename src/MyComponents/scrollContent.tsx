"use client";
import React, { useEffect } from 'react'

interface Props {
  contentID: string
  range: {
    in: number
    out: number
  }
  class?: string
  children: React.ReactNode
}

const ScrollContent = (props: Props) => {
    useEffect(() => {
      document.addEventListener("scroll", () => {
        const leftColumn = document.getElementById(props.contentID);
      
        if (window.scrollY >= props.range.in && window.scrollY < props.range.out) {
          leftColumn!.style = "opacity: 100"
        } else {
          leftColumn!.style = "opacity: 0"
          console.log({ windowY: window.scrollY })
        }
      });
    }, [])

  return (
    <p id={props.contentID} className={props.class}>{props.children}</p>
  )
}

export default ScrollContent