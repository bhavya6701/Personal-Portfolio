"use client";
import React, { act } from "react";
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
    description:
      "This project implements computer vision and deep learning techniques to recognize American Sign Language (ASL) gestures in real-time, \
      offering a user-friendly interface for seamless interaction.",
    header: "ASL Recognition",
    className: "md:col-span-2",
    img: "/assets/images/asl_recognition.png",
    link: "https://github.com/bhavya6701/ASL-Recognition",
  },
  {
    title: "Digit and Alphabet Recognition",
    description:
      "Digit and Alphabet Recognition is a project focused on identifying handwritten digits and alphabets through a graphical user interface (GUI) powered by Tkinter.",
    header: "Digit and Alphabet Recognition",
    className: "md:col-span-2",
    img: "/assets/images/digit_alphabet_recognition.png",
    link: "https://github.com/Devansh-Vaidya/Digit-Alphabet-Recognition",
  },
  {
    title: "Noted.",
    description:
      "Welcome to Noted App—a streamlined platform for creating, saving, and organizing notes digitally. \
    Enjoy seamless note-taking and access your ideas from any device with an internet connection.",
    header: "Noted.",
    className: "md:col-span-3",
    img: "/assets/images/noted.png",
    link: "https://github.com/bhavya6701/Noted",
  },
  {
    title: "Covid-19 Database Management System",
    description:
      "The Covid-19 Database Management System facilitates the seamless sharing of Covid-19 data and information among organizations, researchers, countries, and users.",
    header: "Covid-19 Database Management System",
    className: "md:col-span-3",
    img: "/assets/images/dbms.png",
    link: "https://github.com/bhavya6701/Covid-19-Data-Management-System",
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
      <div className="p-4 gap-3 grid grid-cols-2 sm:grid-cols-2 max-w-[1400px] mx-auto rounded-xl dark:bg-default-100/50 backdrop-blur-sm">
        {items.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => window.open(item.link, "_blank")}
            className="dark:bg-default-100/50 backdrop-blur-md dark:hover:bg-white/10"
          >
            <CardBody className="overflow-visible flex flex-row gap-2">
              <div className="flex flex-col basis-7/12 text-center my-auto">
                <h1 className="font-semibold text-xs md:text-base lg:text-lg p-2 background-shadow">
                  {item.header}
                </h1>
                <div className="text-xs md:text-sm lg:text-base text-balance p-2">
                  {item.description}
                </div>
              </div>
              <div className="flex flex-col gap-2 basis-5/12 p-1 my-auto">
                <img src={item.img} alt={item.title} className="rounded-lg" />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
