import {  Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { icons } from "lucide-react";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata = {
   title: "Doctor Appointment | Book Your Doctor Online",
  description:
    "Find and book doctor appointments easily. Search specialists, view profiles, and schedule visits in a few clicks.",
  keywords: ["doctor", "appointment", "healthcare", "online booking"],
  icons:{
    icon:"/stethoscope.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
  className={montserrat.className}
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
