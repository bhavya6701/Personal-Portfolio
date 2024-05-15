"use client";

import "./About.css";
import React from "react";
import Link from "next/link";
import { Arima } from "next/font/google";
import { InfiniteMovingCards } from "./aceternity_ui/InfiniteMovingCards";
import { Card, CardBody, Image, Progress } from "@nextui-org/react";

const font_arima = Arima({ weight: "400", subsets: ["latin"] });

const testimonials = [
  {
    title: "DSA",
    knowledge: 85,
    experience: 75,
  },
  {
    title: "Computer Vision",
    knowledge: 70,
    experience: 80,
  },
  {
    title: "Deep Learning",
    knowledge: 75,
    experience: 70,
  },
  {
    title: "Machine Learning",
    knowledge: 90,
    experience: 90,
  },
  {
    title: "Git",
    knowledge: 85,
    experience: 95,
  },
  {
    title: "OpenCV",
    knowledge: 70,
    experience: 75,
  },
  {
    title: "Pandas",
    knowledge: 70,
    experience: 75,
  },
  {
    title: "PyTorch",
    knowledge: 80,
    experience: 85,
  },
  {
    title: "Python",
    knowledge: 85,
    experience: 95,
  },
  {
    title: "MySQL",
    knowledge: 80,
    experience: 65,
  },
  {
    title: "Spring Boot",
    knowledge: 75,
    experience: 80,
  },
  {
    title: "Java",
    knowledge: 95,
    experience: 95,
  },
  {
    title: "NextJS",
    knowledge: 50,
    experience: 20,
  },
  {
    title: "ReactJS",
    knowledge: 85,
    experience: 80,
  },
  {
    title: "JavaScript",
    knowledge: 75,
    experience: 80,
  },
  {
    title: "Tailwind",
    knowledge: 80,
    experience: 70,
  },
  {
    title: "CSS",
    knowledge: 70,
    experience: 85,
  },
  {
    title: "HTML",
    knowledge: 80,
    experience: 85,
  },
];

export default function About() {
  return (
    <div>
      <Card isBlurred className="dark:bg-default-100/50 m-auto mt-16 p-5 w-1/2">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="The One"
                className="object-cover"
                src="/assets/images/profile_pic.jpg"
                width="100%"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8 ps-5">
              <h1 id="myname" className={font_arima.className}>
                Hey, I am Bhavya!
              </h1>
              <p className="text-medium text-foreground/60">
                Computer Science Co-op Baccalaureate at Concordia University
              </p>
              <h2 className="text-large text-pretty mt-6">
                Combining my Computer Science background with a focus on Machine
                Learning and Software Development, I delve into the intricacies
                of AI. Beyond coding, I find joy in playing chess, immersing
                myself in video games, pursuing modeling as a hobby, exploring
                the great outdoors, and watching anime. Currently in{" "}
                <Link
                  className="map-link text-decoration-none"
                  href="https://goo.gl/maps/YYDHSSoLXz1dCRbS9"
                >
                  Montreal, Canada.
                </Link>
              </h2>
            </div>
          </div>
        </CardBody>
      </Card>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
