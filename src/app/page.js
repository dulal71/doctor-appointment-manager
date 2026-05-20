import MarqueeTitle from "@/components/MarqueeTitle";
import TopDoctor from "@/components/TopDoctor";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black">
     <TopDoctor></TopDoctor>
     <WhyChooseUs></WhyChooseUs>
     <MarqueeTitle></MarqueeTitle>
    </div>
  );
}
