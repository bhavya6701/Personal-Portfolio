import Image from "next/image";
import CustomNavbar from "@/components/CustomNavbar";
import Background from "@/components/Background";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Background />
      
      <div className="content">
        <CustomNavbar />
      </div>
    </main>
  );
}
