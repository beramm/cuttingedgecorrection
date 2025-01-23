"use client";

import { cn } from "../../../libs/utils";
import React, { useEffect, useState,useRef } from "react";
import { QuoteIconSolid } from "../../icon";
import { useIsVisible } from "../../../hooks/useIsVisible";


export const InfiniteMovingCards = ({
  value = [], // Added default empty array
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  value: {
    content: string;
    user: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  const isVisible = useIsVisible(containerRef);

  return (
<div
  ref={containerRef}
  className={cn(
    "scroller relative z-20 w-[90%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] m-auto",
    className,
    `transition-all duration-500 ease-in-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
    }`
  )}
>
  <ul
    ref={scrollerRef}
    className={cn(
      "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
      start && "animate-scroll",
      pauseOnHover && "hover:[animation-play-state:paused]"
    )}
  >
    {value?.map((value, id) => (
      <li
        className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] bg-primary h-[250px]" 
        key={id}
      >
        <blockquote className="relative h-full w-full">
          <QuoteIconSolid size={44} hexColor={"#FFFFFF"} />
          <div
            aria-hidden="true"
            className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
          ></div>
          <span
            className="relative z-20 text-sm leading-[1.6] text-foreground font-light line-clamp-4 overflow-hidden text-ellipsis"
          >
            &#34; {value.content} &#34;
          </span>
          <div className="absolute bottom-4 right-4">
            <span className="flex flex-col gap-1">
              <span className="text-xl leading-[1.6] font-bold bg-radial-gradient bg-clip-text text-transparent">
                {value.user.toUpperCase()}
              </span>
            </span>
          </div>
        </blockquote>
      </li>
    ))}
  </ul>
</div>


  );
}  

export default InfiniteMovingCards;