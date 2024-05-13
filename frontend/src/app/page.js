import CustomNavbar from "@/components/CustomNavbar";
import Background from "@/components/Background";
import "./page.css";
import About from "@/components/About";

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
