"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { Arima } from "next/font/google";
const font_arima = Arima({ weight: "400", subsets: ["latin"] });

export default function Timeline() {
  // Keep track of the active accordion item
  const [isActive, setIsActive] = React.useState(-1);

  // Update active accordion item
  const handleActive = (e, index) => {
    if (isActive == index) {
      setIsActive(-1);
    } else {
      setIsActive(index);
    }
  };

  return (
    <div>
      <div id="timeline"></div>
      <h1
        className={`text-center text-2xl lg:text-5xl pt-28 mb-8 background-shadow tracking-[0.4em] ${font_arima.className}`}
        
      >
        T I M E L I N E
      </h1>
      <Accordion
        variant="shadow"
        className="p-4 flex flex-col gap-4 max-w-screen-xl mx-auto w-5/6 dark:bg-default-100/50 backdrop-blur-md"
        itemClasses={{
          base: "rounded-lg p-4 border border-white border-opacity-40 dark:hover:bg-white/10",
          heading: "text-sm lg:text-lg",
          title: "font-semibold text-xs md:text-base lg:text-lg",
          subtitle: "text-default-900 text-xs md:text-sm lg:text-base",
          trigger: "h-12 flex items-center",
          indicator: "background-shadow",
          content: "text-xs md:text-sm lg:text-base ps-4",
        }}
        showDivider={false}
      >
        <AccordionItem
          key="6"
          aria-label="Software Development Student - Bell Media"
          title="Software Development Student - Bell Media"
          subtitle="(May 2024 – August 2024)"
          startContent={
            <Icon
              icon="material-symbols-light:developer-mode-tv-outline"
              className={isActive == 6 ? "timeline-active-indicator" : ""}
              width="2em"
              height="2em"
            />
          }
          itemClasses={{
            indicator: "text-large timeline-active-indicator",
          }}
          onPress={(e) => handleActive(e, 6)}
        >
          <ul>
            <li className="list-inside">
              • Currently Working on a project to automate the service desk
              request on Jira.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="AI Developer Intern - Ubicquia Inc."
          title="AI Developer Intern - Ubicquia Inc."
          subtitle="(Jan 2024 – April 2024)"
          startContent={
            <Icon
              icon="material-symbols-light:developer-mode-tv-outline"
              className={isActive == 5 ? "timeline-active-indicator" : ""}
              width="2em"
              height="2em"
            />
          }
          onPress={(e) => handleActive(e, 5)}
        >
          <ul>
            <li className="list-inside">
              • Automated Privacy Masking for UbiHub (SD situational awareness
              application) - Saves 10 mins per nodes of configuration and
              enables turn key solutioning
            </li>
            <li>
              • Investigation of UbiHub APQ resets and FPS issues using health
              report data (temperature, memory, AIM) - Excluded temperature and
              memory causes for APQ resetting.
            </li>
            <li>
              • TVM3 Pole Detection and Vegetation encroachment detection - Made
              POC solution involving zero-shot pole detection and depth model
              for detecting encroaching vegetation - Evaluated the necessary
              computational requirements to run these models on the edge.
            </li>
            <li>
              • Night Image Vehicle Annotation - Set up annotation pipeline
              using AI to automate over half the task.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Junior Java Developer - Antea Canada Inc."
          title="Junior Java Developer - Antea Canada Inc."
          subtitle="(Sept 2022 – April 2023)"
          startContent={
            <Icon
              icon="material-symbols-light:developer-mode-tv-outline"
              className={isActive == 4 ? "timeline-active-indicator" : ""}
              width="2em"
              height="2em"
            />
          }
          onPress={(e) => handleActive(e, 4)}
        >
          <ul>
            <li>
              • Proficiently addressed and rectified software bugs while
              implementing valuable enhancements to optimize the Antea platform
              with Java and Vaadin.
            </li>
            <li>
              • Successfully modernized the system by converting outdated
              Hibernate code to Spring JPA, enhancing overall performance and
              maintainability.
            </li>
            <li>
              • Seamlessly upgraded the Jaspersoft version and crafted
              customized PDF layouts using JRXML and Java to precisely meet
              customer specifications.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Bachelors of Computer Science Co-op Program"
          title="Bachelors of Computer Science Co-op Program"
          subtitle="(2021 - 2024)"
          startContent={
            <Icon
              icon="map:university"
              className={isActive == 3 ? "timeline-active-indicator" : ""}
              width="2em"
              height="2em"
            />
          }
          onPress={(e) => handleActive(e, 3)}
        >
          <ul>
            <li>• Institute: Concordia University</li>
            <li>• Location: Montreal, Quebec, Canada</li>
            <li>• Dean's List: 2021-2022</li>
            <li>• Grade: 3.7/4.3</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Java Developer Intern - WeTheDevelopers"
          title="Java Developer Intern - WeTheDevelopers"
          subtitle="(Sept 2020 – Dec 2020)"
          startContent={
            <Icon
              icon="material-symbols-light:developer-mode-tv-outline"
              className={isActive == 2 ? "timeline-active-indicator" : ""}
              width="2em"
              height="2em"
            />
          }
          onPress={(e) => handleActive(e, 2)}
        >
          <ul>
            <li>
              • Developed a music player application utilizing Java, XML, and
              Android Studio proficiency.
            </li>
            <li>
              • Rectified issues in mobile application projects at
              WeTheDevelopers during the development of my application.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="1"
          aria-label="Grade 12 (ISC Board)"
          title="Grade 12 (ISC Board)"
          subtitle="(2020)"
          startContent={
            <Icon
              icon="map:university"
              className={isActive == 1 ? "timeline-active-indicator" : ""}
              width="2em"
              height="2em"
            />
          }
          onPress={(e) => handleActive(e, 1)}
        >
          <ul>
            <li>• Institute: S N Kansagra School - TGES</li>
            <li>• Location: Rajkot, Gujarat, India</li>
            <li>• Grade: 94.5%</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="0"
          aria-label="Grade 10 (ICSE Board)"
          title="Grade 10 (ICSE Board)"
          subtitle="(2018)"
          startContent={
            <Icon
              icon="map:university"
              className={isActive == 0 ? "timeline-active-indicator" : ""}
              width="2em"
              height="2em"
            />
          }
          onPress={(e) => handleActive(e, 0)}
        >
          <ul>
            <li>• Institute: S N Kansagra School - TGES</li>
            <li>• Location: Rajkot, Gujarat, India</li>
            <li>• Grade: 85%</li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
