import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent FontAwesome from auto-adding CSS
config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ticketing App",
  description: "A ticketing app by Sunny",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen max-h-screen" >
        <Nav />
        <div className="flex-grow overflow-auto bg-page text-default_text" >
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
