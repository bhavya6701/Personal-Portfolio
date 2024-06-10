// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import React, { useState, forwardRef } from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export const FormInput = forwardRef(function FormInput(
  { className, type, ...props },
  ref
) {
  const radius = 100; // change this to increase the radius of the hover effect
  const [visible, setVisible] = useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? radius + "px" : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            var(--cyan-500),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <textarea
        type={type}
        className={cn(
          `flex h-10 w-full border-none dark:bg-default-100 backdrop-blur-md text-black
          dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-cyan-500
           dark:focus-visible:via-cyan-500
           disabled:cursor-not-allowed disabled:opacity-50
           transition duration-400 resize-none
           `,
          className
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});

FormInput.displayName = "Input";
