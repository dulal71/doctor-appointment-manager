import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: "Doctor Appointment | Book Your Doctor Online",
  description:
    "Find and book doctor appointments easily. Search specialists, view profiles, and schedule visits in a few clicks.",
  keywords: ["doctor", "appointment", "healthcare", "online booking"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
            <SmoothScroll>
          <Navbar />

          {children}

          <Footer />
        </SmoothScroll>
         <Toaster />
        </body>
    </html>
  );
}
