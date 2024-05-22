import "./page.css";
import About from "@/components/About";
import Background from "@/components/Background";
import CustomNavbar from "@/components/CustomNavbar";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <Background />

      <div className="content">
        <div id="about"></div>
        <CustomNavbar />
        <About />
        <Timeline />
      </div>
    </main>
  );
}
