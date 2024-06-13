'use client';

import "./page.css";
import "./styles.css";
import About from "@/components/About";
import Background from "@/components/Background";
import CustomNavbar from "@/components/CustomNavbar";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Background />

      <div className="content">
        <div id="about"></div>
        <CustomNavbar/>
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
