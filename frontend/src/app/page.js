'use client';
import "./page.css";
import "./styles.css";
import About from "@/components/About";
import Background from "@/components/Background";
import CustomNavbar from "@/components/CustomNavbar";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import  { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  var activeIndex = JSON.parse(searchParams.get("activeIndex"));
  if (activeIndex === null) {
    activeIndex = 0;
  }
  console.log(`activeIndex: ${activeIndex}`);
  return (
    <main>
      <Background />

      <div className="content">
        <div id="about"></div>
        <CustomNavbar activeIndex={activeIndex}/>
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
