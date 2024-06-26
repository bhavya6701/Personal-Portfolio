"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState, useRef } from "react";
import { Progress } from "@nextui-org/react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  // Container and scroller refs
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  // Add animation after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      addAnimation();
    }, 1000); // Delay for 1 second

    return () => clearTimeout(timer);
  }, []);

  // Start animation
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

  // Get direction and speed of the animation
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

  // Get speed of the animation
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "180s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] border border-default-300 ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[350px] dark:bg-default-100/70"
            key={item.title}
          >
            <div className="flex flex-col col-span-6 md:col-span-8">
              <h1 className="moving-card-header">{item.title}</h1>
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8 space-y-6">
              <Progress
                size="sm"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-cyan-500 to-yellow-500",
                  label: "tracking-wider text-default-900",
                }}
                label="Knowledge"
                value={item.knowledge}
                showValueLabel={false}
              />

              <Progress
                size="sm"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-cyan-500 to-yellow-500",
                  label: "tracking-wider text-default-900",
                }}
                label="Experience"
                value={item.experience}
                showValueLabel={false}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
