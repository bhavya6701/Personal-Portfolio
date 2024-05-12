import { Sono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const font_sono = Sono({ weight: "200", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={font_sono.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
