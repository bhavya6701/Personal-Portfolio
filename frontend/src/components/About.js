"use client";

import React from "react";
import { Arima } from "next/font/google";

import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { Meteors } from "./aceternity_ui/Meteors";
import "./About.css";
import Link from "next/link";

const font_arima = Arima({ weight: "400", subsets: ["latin"] });

export default function About() {

  return (
    <Card isBlurred className="dark:bg-default-100/50 m-auto mt-10 w-1/2">
      <Meteors number={30} className="z-0 meteors" />
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              src="/assets/profile_pic.jpg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <h1 id="myname" className={font_arima.className}>Hey, I am Bhavya!</h1>
            <p className="text-medium text-foreground/60">
              Computer Science Co-op Baccalaureate at Concordia University
            </p>
            <h1 className="text-large mt-6">
              Combining my Computer Science background with a focus on Machine
              Learning and Software Development, I delve into the intricacies of
              AI. Beyond coding, I find joy in playing chess, immersing myself
              in video games, pursuing modeling as a hobby, exploring the great
              outdoors, and watching anime. Currently in{" "}
              <Link
                className="map-link text-decoration-none"
                href="https://goo.gl/maps/YYDHSSoLXz1dCRbS9"
              >
                Montreal, Canada.
              </Link>
            </h1>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
