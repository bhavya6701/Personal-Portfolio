"use client";
import React, { act } from "react";
import { Icon } from "@iconify/react";
import { Arima } from "next/font/google";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  link,
} from "@nextui-org/react";

const font_arima = Arima({ weight: "400", subsets: ["latin"] });

const items = [
  {
    title: "ASL Recognition",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: "ASL Recognition",
    className: "md:col-span-2",
    img: "/assets/images/asl_recognition.png",
    link: "https://github.com/bhavya6701/ASL-Recognition"
  },
  {
    title: "Noted.",
    description: "Discover the beauty of thoughtful and functional design.",
    header: "Noted.",
    className: "md:col-span-3",
    img: "/assets/images/noted.png",
    link: "https://github.com/bhavya6701/Noted"
  },
  {
    title: "Covid-19 Database Management System",
    description:
      "Understand the impact of effective communication in our lives.",
    header: "Covid-19 Database Management System",
    className: "md:col-span-3",
    img: "/assets/images/dbms.png",
    link: "https://github.com/bhavya6701/Covid-19-Data-Management-System"
  },
  {
    title: "Digit and Alphabet Recognition",
    description: "Dive into the transformative power of technology.",
    header: "Digit and Alphabet Recognition",
    className: "md:col-span-2",
    img: "/assets/images/digit_alphabet_recognition.png",
    link: "https://github.com/Devansh-Vaidya/Digit-Alphabet-Recognition"
  },
];

export default function Projects() {
  return (
    <div>
      <h1
        className={`text-center text-2xl lg:text-5xl pt-28 mb-8 background-shadow tracking-[0.4em] ${font_arima.className}`}
        id="projects"
      >
        P R O J E C T S
      </h1>
      <div className="p-4 gap-4 grid grid-cols-2 sm:grid-cols-2 max-w-[1400px] mx-auto rounded-xl dark:bg-default-100/50 backdrop-blur-sm">
        {items.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => window.open(item.link, "_blank")}
            className="dark:bg-default-100/50 backdrop-blur-sm dark:hover:bg-white/10"
          >
            <CardBody className="overflow-visible flex flex-row gap-2">
              <div className="flex flex-col basis-2/5 text-center my-auto">
                <h1 className="font-semibold text-xs md:text-base lg:text-lg p-2 background-shadow">
                  {item.header}
                </h1>
                <div className="text-xs md:text-sm lg:text-base text-balance p-2">{item.description}</div>
              </div>
              <div className="flex flex-col gap-2 basis-3/5 p-2 my-auto">
                <img src={item.img} alt={item.title} className="rounded-lg" />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
