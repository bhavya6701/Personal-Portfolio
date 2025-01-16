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
                    subtitle: "text-default-900 text-xs md:text-sm",
                    trigger: "h-12 flex items-center",
                    indicator: "background-shadow",
                    content: "text-xs md:text-sm lg:text-base ps-4",
                }}
                showDivider={false}
            >
                <AccordionItem
                    key="6"
                    aria-label="AI Developer Intern - Ubicquia Inc."
                    title="AI Developer Intern - Ubicquia Inc."
                    subtitle="Jan 2024 – April 2024 | September 2024 – December 2024"
                    startContent={
                        <Icon
                            icon="material-symbols-light:developer-mode-tv-outline"
                            className={
                                isActive == 6 ? "timeline-active-indicator" : ""
                            }
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
                        <li>
                            • Automated privacy masking for UbiHub’s situational
                            awareness application using the Grounded SAM model,
                            saving 500 hours of node configuration every year
                            and enabling seamless turnkey solution deployment.
                        </li>
                        <li>
                            • Fine-tuned the Segment-Anything (SAM) model to
                            enable efficient privacy masking of buildings in
                            visual datasets, incorporating statistical utility
                            to compare different model performances.
                        </li>
                        <li>
                            • Developed an automated system to aggregate
                            bi-directional speed reports, reducing report
                            generation time by 4 hours.
                        </li>
                        <li>
                            • Investigated UbiHub APQ application resets and FPS
                            issues using health report data (temperature,
                            memory, AIM), improving system stability.
                        </li>
                        <li>
                            • Created a proof-of-concept solution for TVM3 pole
                            detection and vegetation encroachment using
                            zero-shot pole detection and depth modeling;
                            evaluated computational requirements for edge
                            deployment.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    key="5"
                    aria-label="Software Development Student - Bell Media"
                    title="Software Development Student - Bell Media"
                    subtitle="May 2024 – August 2024"
                    startContent={
                        <Icon
                            icon="material-symbols-light:developer-mode-tv-outline"
                            className={
                                isActive == 5 ? "timeline-active-indicator" : ""
                            }
                            width="2em"
                            height="2em"
                        />
                    }
                    itemClasses={{
                        indicator: "text-large timeline-active-indicator",
                    }}
                    onPress={(e) => handleActive(e, 5)}
                >
                    <ul>
                        <li>
                            • Designed and developed proof-of-concept AI
                            solutions for service desk automation, reducing
                            ticket volume and improving response time.
                        </li>
                        <li>
                            • Conducted back-end development to resolve bugs and
                            enhance system stability, using Java and Adobe
                            Experience Manager (AEM).
                        </li>
                        <li>
                            • Improved front-end user experience by implementing
                            design adjustments and feature enhancements with
                            Vue.js, aligning with user feedback and design best
                            practices.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label="Junior Java Developer - Antea Canada Inc."
                    title="Junior Java Developer - Antea Canada Inc."
                    subtitle="Sept 2022 – April 2023"
                    startContent={
                        <Icon
                            icon="material-symbols-light:developer-mode-tv-outline"
                            className={
                                isActive == 4 ? "timeline-active-indicator" : ""
                            }
                            width="2em"
                            height="2em"
                        />
                    }
                    onPress={(e) => handleActive(e, 4)}
                >
                    <ul>
                        <li>
                            • Resolved software bugs and implemented feature
                            enhancements to optimize the Antea platform using
                            Java and Vaadin, applying Object-Oriented
                            Programming principles.
                        </li>
                        <li>
                            • Modernized legacy code by converting outdated
                            Hibernate implementations to Spring JPA, boosting
                            system performance and maintainability.
                        </li>
                        <li>
                            • Upgraded Jaspersoft reporting tools and developed
                            customized PDF layouts using JRXML and Java to meet
                            diverse customer requirements.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="Bachelors of Computer Science (Co-op)"
                    title="Bachelors of Computer Science (Co-op)"
                    subtitle="2021 - 2024"
                    startContent={
                        <Icon
                            icon="map:university"
                            className={
                                isActive == 3 ? "timeline-active-indicator" : ""
                            }
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
                        <li>• GPA: 3.72/4.30</li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Java Developer Intern - WeTheDevelopers"
                    title="Java Developer Intern - WeTheDevelopers"
                    subtitle="Sept 2020 – Dec 2020"
                    startContent={
                        <Icon
                            icon="material-symbols-light:developer-mode-tv-outline"
                            className={
                                isActive == 2 ? "timeline-active-indicator" : ""
                            }
                            width="2em"
                            height="2em"
                        />
                    }
                    onPress={(e) => handleActive(e, 2)}
                >
                    <ul>
                        <li>
                            • Developed a music player application utilizing
                            Java, XML, and Android Studio proficiency.
                        </li>
                        <li>
                            • Rectified issues in mobile application projects at
                            WeTheDevelopers during the development of my
                            application.
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    key="1"
                    aria-label="Grade 12 (ISC Board)"
                    title="Grade 12 (ISC Board)"
                    subtitle="2020"
                    startContent={
                        <Icon
                            icon="map:university"
                            className={
                                isActive == 1 ? "timeline-active-indicator" : ""
                            }
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
                    subtitle="2018"
                    startContent={
                        <Icon
                            icon="map:university"
                            className={
                                isActive == 0 ? "timeline-active-indicator" : ""
                            }
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
