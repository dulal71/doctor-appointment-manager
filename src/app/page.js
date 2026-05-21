import AppointmentSection from "@/components/AppointmentSection";
import Banner from "@/components/Banner";
import Find from "@/components/Find";
import MarqueeTitle from "@/components/MarqueeTitle";
import Reviews from "@/components/Reviews";
import TopDoctor from "@/components/TopDoctor";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black">
     <Banner></Banner>
     <TopDoctor></TopDoctor>
     <Find></Find>
     <WhyChooseUs></WhyChooseUs>
      <AppointmentSection></AppointmentSection>
     <MarqueeTitle></MarqueeTitle>
     <Reviews></Reviews>
    
    </div>
  );
}
