"use client";

import React from "react";
import Link from "next/link";
import { Card, CardBody, Image } from "@nextui-org/react";
import { InfiniteMovingCards } from "./aceternity_ui/InfiniteMovingCards";

import { Arima } from "next/font/google";
const font_arima = Arima({ weight: "400", subsets: ["latin"] });

// Technical Skills Data (Title, Knowledge, Experience)
const technical_skills = [
  {
    title: "DSA",
    knowledge: 88,
    experience: 77,
  },
  {
    title: "Computer Vision",
    knowledge: 77,
    experience: 80,
  },
  {
    title: "Deep Learning",
    knowledge: 82,
    experience: 74,
  },
  {
    title: "Machine Learning",
    knowledge: 95,
    experience: 90,
  },
  {
    title: "Git",
    knowledge: 87,
    experience: 94,
  },
  {
    title: "OpenCV",
    knowledge: 70,
    experience: 77,
  },
  {
    title: "Pandas",
    knowledge: 68,
    experience: 77,
  },
  {
    title: "PyTorch",
    knowledge: 84,
    experience: 88,
  },
  {
    title: "Python",
    knowledge: 88,
    experience: 94,
  },
  {
    title: "MySQL",
    knowledge: 78,
    experience: 72,
  },
  {
    title: "Spring Boot",
    knowledge: 72,
    experience: 75,
  },
  {
    title: "Java",
    knowledge: 94,
    experience: 88,
  },
  {
    title: "NextJS",
    knowledge: 45,
    experience: 68,
  },
  {
    title: "ReactJS",
    knowledge: 82,
    experience: 88,
  },
  {
    title: "JavaScript",
    knowledge: 75,
    experience: 88,
  },
  {
    title: "Tailwind",
    knowledge: 80,
    experience: 80,
  },
  {
    title: "CSS",
    knowledge: 70,
    experience: 77,
  },
  {
    title: "HTML",
    knowledge: 82,
    experience: 84,
  },
];

export default function About() {
  return (
    <div>
      <Card className="dark:bg-default-100/50 m-auto my-16 p-1 w-3/4 md:w-1/2 backdrop-blur-md">
        <CardBody>
          <div className="grid grid-cols-6 lg:grid-cols-12 items-center justify-center">
            <div className="relative col-span-6 lg:col-span-4 m-5">
              <Image
                alt="The One"
                className="object-cover"
                src="/assets/images/profile_pic.jpg"
                width="100%"
                isBlurred
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8 ps-5 pt-4 lg:pt-0">
              <h1 id="myname" className={font_arima.className}>
                Hey, I am Bhavya!
              </h1>
              <p className="text-base text-foreground/60">
                Computer Science Co-op Baccalaureate at Concordia University
              </p>
              <h2 className="text-lg text-pretty mt-6">
                Combining my Computer Science background with a focus on Machine
                Learning and Software Development, I delve into the intricacies
                of AI. Beyond coding, I find joy in playing chess, immersing
                myself in video games, pursuing modeling as a hobby, exploring
                the great outdoors, and watching anime. Currently in{" "}
                <Link
                  className="map-link text-decoration-none"
                  href="https://goo.gl/maps/YYDHSSoLXz1dCRbS9"
                >
                  Montreal, Canada
                </Link>
                .
              </h2>
            </div>
          </div>
        </CardBody>
      </Card>
      <InfiniteMovingCards
        items={technical_skills}
        direction="right"
        speed="fast"
      />
    </div>
  );
}
