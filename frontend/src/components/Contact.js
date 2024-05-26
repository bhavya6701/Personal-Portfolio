"use client";
import React, { act } from "react";
import { Icon } from "@iconify/react";
import { Arima } from "next/font/google";

const font_arima = Arima({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  
  return (
    <div>
      <h1
        className={`text-center text-2xl lg:text-5xl pt-28 mb-8 background-shadow tracking-[0.4em] ${font_arima.className}`}
        id="contact"
      >
        CONTACT
      </h1>
      
    </div>
  );
}
