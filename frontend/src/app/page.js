import "./page.css";
import About from "@/components/About";
import Background from "@/components/Background";
import CustomNavbar from "@/components/CustomNavbar";

export default function Home() {
  return (
    <main>
      <Background />

      <div className="content">
        <CustomNavbar />
        <About />
      </div>
    </main>
  );
}
