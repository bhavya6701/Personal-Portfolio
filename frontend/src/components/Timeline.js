"use client";
import React, { act } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import "./Timeline.css";

export default function Timeline() {
  var activeList = [false, false, false, false, false, false, false];
  const [isActive, setIsActive] = React.useState(activeList);

  const handleActive = (e, index) => {
    activeList.fill(false);
    activeList[index] = !isActive[index];
    setIsActive(activeList);
    console.log(activeList);
  };

  return (
    <Accordion
      variant="shadow"
      className="my-20 p-4 flex flex-col gap-4 w-full max-w-[1000px] mx-auto bg-black bg-opacity-80"
      itemClasses={{
        base: "rounded-lg p-2 mx-4 border border-white border-opacity-20",
        heading: "font-semibold text-lg",
        subtitle: "text-sm text-default-900",
        trigger: "h-14 flex items-center",
        indicator: "text-large background-shadow",
        content: "text-small ps-4",
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
            className={isActive[6] ? "background-shadow" : ""}
            width="2em"
            height="2em"
          />
        }
        itemClasses={{
          indicator: "text-large background-shadow",
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
            className={isActive[5] ? "background-shadow" : ""}
            width="2em"
            height="2em"
          />
        }
        onPress={(e) => handleActive(e, 5)}
      >
        <ul>
          <li className="list-inside">
            • Automated Privacy Masking for UbiHub (SD situational awareness
            application) - Saves 10 mins per nodes of configuration and enables
            turn key solutioning
          </li>
          <li>
            • Investigation of UbiHub APQ resets and FPS issues using health
            report data (temperature, memory, AIM) - Excluded temperature and
            memory causes for APQ resetting.
          </li>
          <li>
            • TVM3 Pole Detection and Vegetation encroachment detection - Made
            POC solution involving zero-shot pole detection and depth model for
            detecting encroaching vegetation - Evaluated the necessary
            computational requirements to run these models on the edge.
          </li>
          <li>
            • Night Image Vehicle Annotation - Set up annotation pipeline using
            AI to automate over half the task.
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
            className={isActive[4] ? "background-shadow" : ""}
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
            • Seamlessly upgraded the Jaspersoft version and crafted customized
            PDF layouts using JRXML and Java to precisely meet customer
            specifications.
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
            className={isActive[3] ? "background-shadow" : ""}
            width="2em"
            height="2em"
          />
        }
        onPress={(e) => handleActive(e, 3)}
      >
        <ul>
          <li>• Institute: Concordia University</li>
          <li>• Location: Montreal, Quebec, Canada</li>
          <li>• Grade: 3.7/4.3</li>
          <li>• Dean's List: 2021-2022</li>
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
            className={isActive[2] ? "background-shadow" : ""}
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
            • Rectified issues in mobile application projects at WeTheDevelopers
            during the development of my application.
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
            className={isActive[1] ? "background-shadow" : ""}
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
            className={isActive[0] ? "background-shadow" : ""}
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
  );
}